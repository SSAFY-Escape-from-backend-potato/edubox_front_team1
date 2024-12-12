import { render, screen, fireEvent } from "@testing-library/react";
import PasswordConfirmInput from "../components/SignupPage/SignupForm/PasswordConfirmInput";

describe("PasswordConfirmInput", () => {
  const mockProps = {
    passwordConfirm: "",
    setPasswordConfirm: jest.fn(),
    showPasswordConfirm: false,
    togglePasswordConfirmVisibility: jest.fn(),
    passwordsMatch: true,
  };

  it("비밀번호 확인 입력 필드가 렌더링된다", () => {
    render(<PasswordConfirmInput {...mockProps} />);
    expect(screen.getByLabelText("비밀번호 확인")).toBeInTheDocument();
  });

  it("비밀번호가 일치하지 않을 때 에러 메시지를 표시한다", () => {
    render(
      <PasswordConfirmInput
        {...mockProps}
        passwordsMatch={false}
        passwordConfirm="test"
      />
    );
    expect(
      screen.getByText("비밀번호가 일치하지 않습니다")
    ).toBeInTheDocument();
  });

  it("비밀번호 확인 보기/숨기기 토글이 작동한다", () => {
    render(<PasswordConfirmInput {...mockProps} />);
    const toggleButton = screen.getByLabelText("비밀번호 확인 보기");
    fireEvent.click(toggleButton);
    expect(mockProps.togglePasswordConfirmVisibility).toHaveBeenCalled();
  });
});
