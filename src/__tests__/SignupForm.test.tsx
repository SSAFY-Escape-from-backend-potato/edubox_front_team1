import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignupForm from "../components/SignupPage/SignupForm";

describe("SignupForm", () => {
  it("모든 폼 요소가 렌더링된다", () => {
    render(<SignupForm />);
    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
    expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
    expect(screen.getByLabelText("비밀번호 확인")).toBeInTheDocument();
    expect(screen.getByText("가입하기")).toBeInTheDocument();
  });

  it("이메일 입력값을 검증한다", async () => {
    render(<SignupForm />);
    const emailInput = screen.getByLabelText("이메일");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(
      screen.getByText("이메일 형식이 올바르지 않습니다")
    ).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    await waitFor(() => {
      expect(
        screen.queryByText("이메일 형식이 올바르지 않습니다")
      ).not.toBeInTheDocument();
    });
  });

  it("비밀번호 요구사항을 검증한다", async () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("비밀번호");

    fireEvent.change(passwordInput, { target: { value: "weak" } });
    expect(
      screen.getByText("8자 이상 32자 이하 입력 (공백 제외)")
    ).toBeInTheDocument();

    fireEvent.change(passwordInput, {
      target: { value: "StrongPassword123!" },
    });
    await waitFor(() => {
      const validationItems = screen.getAllByTestId("validation-icon");
      expect(
        validationItems.some((item) => item.classList.contains("fa-check"))
      ).toBeTruthy();
    });
  });

  it("비밀번호 확인 값을 검증한다", async () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("비밀번호");
    const confirmInput = screen.getByLabelText("비밀번호 확인");

    fireEvent.change(passwordInput, {
      target: { value: "StrongPassword123!" },
    });
    fireEvent.change(confirmInput, {
      target: { value: "DifferentPassword123!" },
    });
    expect(
      screen.getByText("비밀번호가 일치하지 않습니다")
    ).toBeInTheDocument();

    fireEvent.change(confirmInput, { target: { value: "StrongPassword123!" } });
    await waitFor(() => {
      expect(
        screen.queryByText("비밀번호가 일치하지 않습니다")
      ).not.toBeInTheDocument();
    });
  });

  it("폼 제출을 처리한다", async () => {
    // render(<SignupForm />);
    // const form = screen.getByRole("form");
    // const submitButton = screen.getByText("가입하기");
    // fireEvent.submit(form);
    // 폼 제출 검증 로직 추가
  });
});
