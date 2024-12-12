import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "../components/SignupPage/SignupForm/PasswordInput";

describe("PasswordInput", () => {
  const mockProps = {
    password: "",
    setPassword: jest.fn(),
    showPassword: false,
    togglePasswordVisibility: jest.fn(),
    passwordValidation: {
      hasTwoTypes: false,
      hasValidLength: false,
      hasNoConsecutive: false,
    },
  };

  it("비밀번호 입력 필드가 렌더링된다", () => {
    render(<PasswordInput {...mockProps} />);
    expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
  });

  it("비밀번호 보기/숨기기 토글이 작동한다", () => {
    render(<PasswordInput {...mockProps} />);
    const toggleButton = screen.getByLabelText("비밀번호 보기");
    fireEvent.click(toggleButton);
    expect(mockProps.togglePasswordVisibility).toHaveBeenCalled();
  });

  it("비밀번호 유효성 검사 메시지가 표시된다", () => {
    render(<PasswordInput {...mockProps} />);
    expect(
      screen.getByText("영문/숫자/특수문자 중 2가지 이상 포함")
    ).toBeInTheDocument();
    expect(
      screen.getByText("8자 이상 32자 이하 입력 (공백 제외)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("연속 3자 이상 동일한 문자/숫자 제외")
    ).toBeInTheDocument();
  });
});
