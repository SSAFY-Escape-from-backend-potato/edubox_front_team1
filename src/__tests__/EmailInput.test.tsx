import { render, screen } from "@testing-library/react";
import EmailInput from "../components/SignupPage/SignupForm/EmailInput";

describe("EmailInput", () => {
  const mockProps = {
    email: "",
    setEmail: jest.fn(),
    isValidEmail: false,
    isEmailVerified: false,
  };

  it("이메일 입력 필드가 렌더링된다", () => {
    render(<EmailInput {...mockProps} />);
    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
  });

  it("유효하지 않은 이메일 형식일 때 에러 메시지를 표시한다", () => {
    render(<EmailInput {...mockProps} email="invalid-email" />);
    expect(
      screen.getByText("이메일 형식이 올바르지 않습니다")
    ).toBeInTheDocument();
  });

  it("유효한 이메일 형식일 때 인증하기 버튼이 활성화된다", () => {
    render(
      <EmailInput {...mockProps} isValidEmail={true} email="test@example.com" />
    );
    const verifyButton = screen.getByText("인증하기");
    expect(verifyButton).not.toBeDisabled();
  });

  it("이메일이 인증되었을 때 인증 완료 메시지를 표시한다", () => {
    render(
      <EmailInput
        {...mockProps}
        isValidEmail={true}
        isEmailVerified={true}
        email="test@example.com"
      />
    );
    expect(screen.getByText("인증되었습니다")).toBeInTheDocument();
  });
});
