import { render, screen } from "@testing-library/react";
import Profile from "../components/UserPage/Profile";

describe("프로필 컴포넌트", () => {
  const mockUserProfile = {
    bio: "안녕하세요. 테스트 프로필입니다.",
    completedCourses: 5,
    reviews: 3,
  };

  it("자기소개가 있을 때 자기소개를 표시한다", () => {
    render(<Profile userProfile={mockUserProfile} />);

    expect(screen.getByText(mockUserProfile.bio)).toBeInTheDocument();
  });

  it("자기소개가 없을 때 기본 메시지를 표시한다", () => {
    render(
      <Profile
        userProfile={{
          ...mockUserProfile,
          bio: "",
        }}
      />
    );

    expect(screen.getByText("자기소개가 없습니다.")).toBeInTheDocument();
  });

  it("수강 완료 강의 수를 표시한다", () => {
    render(<Profile userProfile={mockUserProfile} />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("수강 완료 강의")).toBeInTheDocument();
  });

  it("작성한 리뷰 수를 표시한다", () => {
    render(<Profile userProfile={mockUserProfile} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("작성한 리뷰")).toBeInTheDocument();
  });

  it("프로필 섹션의 모든 제목이 표시된다", () => {
    render(<Profile userProfile={mockUserProfile} />);

    expect(screen.getByText("소개")).toBeInTheDocument();
    expect(screen.getByText("활동")).toBeInTheDocument();
  });
});
