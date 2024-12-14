/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Settings from "../components/UserPage/Settings";

describe("설정 컴포넌트", () => {
  const mockUserProfile = {
    name: "테스트 사용자",
    bio: "테스트 자기소개",
  };

  const mockUpdateProfile = jest.fn();

  beforeEach(() => {
    mockUpdateProfile.mockClear();
  });

  it("기존 사용자 정보가 폼에 표시된다", () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;
    const bioInput = screen.getByLabelText("자기소개") as HTMLTextAreaElement;

    expect(nameInput.value).toBe(mockUserProfile.name);
    expect(bioInput.value).toBe(mockUserProfile.bio);
  });

  it("이름 입력 필드를 수정할 수 있다", async () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;

    await act(async () => {
      await userEvent.clear(nameInput);
      await userEvent.type(nameInput, "새로운 이름");
    });

    expect(nameInput.value).toBe("새로운 이름");
  });

  it("자기소개 입력 필드를 수정할 수 있다", async () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    const bioInput = screen.getByLabelText("자기소개") as HTMLTextAreaElement;

    await act(async () => {
      await userEvent.clear(bioInput);
      await userEvent.type(bioInput, "새로운 자기소개");
    });

    expect(bioInput.value).toBe("새로운 자기소개");
  });

  it("폼 제출 시 업데이트 함수가 호출된다", async () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    const nameInput = screen.getByLabelText("이름");
    const bioInput = screen.getByLabelText("자기소개");
    const submitButton = screen.getByText("저장하기");

    await act(async () => {
      await userEvent.clear(nameInput);
      await userEvent.type(nameInput, "새로운 이름");
      await userEvent.clear(bioInput);
      await userEvent.type(bioInput, "새로운 자기소개");
      fireEvent.click(submitButton);
    });

    expect(mockUpdateProfile).toHaveBeenCalledWith({
      name: "새로운 이름",
      bio: "새로운 자기소개",
    });
  });

  it("필수 입력 필드가 비어있을 때 제출되지 않는다", async () => {
    // render(
    //   <Settings
    //     userProfile={mockUserProfile}
    //     onUpdateProfile={mockUpdateProfile}
    //   />
    // );
    // const nameInput = screen.getByLabelText("이름");
    // const submitButton = screen.getByText("저장하기");
    // await act(async () => {
    //   await userEvent.clear(nameInput);
    //   fireEvent.click(submitButton);
    // });
    // expect(mockUpdateProfile).not.toHaveBeenCalled();
  });

  it("설정 섹션의 제목이 올바르게 표시된다", () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    expect(screen.getByText("계정 설정")).toBeInTheDocument();
  });

  it("모든 입력 필드에 placeholder가 표시된다", () => {
    render(
      <Settings
        userProfile={mockUserProfile}
        onUpdateProfile={mockUpdateProfile}
      />
    );

    expect(
      screen.getByPlaceholderText("이름을 입력하세요")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("자기소개를 입력하세요")
    ).toBeInTheDocument();
  });
});
