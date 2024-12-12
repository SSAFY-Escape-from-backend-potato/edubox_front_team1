import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginPage/LoginForm";

describe("LoginForm", () => {
  it("이메일과 비밀번호 입력창이 렌더링되어야 한다", () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText("이메일")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("비밀번호")).toBeInTheDocument();
  });

  it("로그인 버튼이 렌더링되어야 한다", () => {
    render(<LoginForm />);

    expect(screen.getByRole("button", { name: "로그인" })).toBeInTheDocument();
  });

  it("비밀번호 보기/숨기기 토글 버튼이 작동해야 한다", () => {
    render(<LoginForm />);

    const passwordInput = screen.getByPlaceholderText("비밀번호");
    const toggleButton = screen.getByRole("button", { name: "" });

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  // ERD 및 API 명세서 작성 이후 테스트 추가
  it("필수 입력값이 비어있을 경우 폼 제출이 방지되어야 한다", () => {
    // render(<LoginForm />);
    // const form = screen.getByRole("form");
    // fireEvent.submit(form);
    // expect(screen.getByPlaceholderText("이메일")).toBeInvalid();
    // expect(screen.getByPlaceholderText("비밀번호")).toBeInvalid();
  });
});
