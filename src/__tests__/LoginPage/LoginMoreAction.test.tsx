import { render, screen } from "@testing-library/react";
import LoginMoreAction from "../../components/LoginPage/LoginMoreAction";

describe("LoginMoreAction", () => {
  it("이메일 찾기 링크가 존재해야 한다", () => {
    render(<LoginMoreAction />);
    const emailFindLink = screen.getByText("이메일 찾기");

    expect(emailFindLink).toBeInTheDocument();
    expect(emailFindLink).toHaveAttribute("href", "/signin/find/email");
  });

  it("비밀번호 찾기 링크가 존재해야 한다", () => {
    render(<LoginMoreAction />);
    const passwordFindLink = screen.getByText("비밀번호 찾기");

    expect(passwordFindLink).toBeInTheDocument();
    expect(passwordFindLink).toHaveAttribute("href", "/signin/find/password");
  });

  it("회원가입 링크가 존재해야 한다", () => {
    render(<LoginMoreAction />);
    const signUpLink = screen.getByText("회원가입");

    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute("href", "/signup");
  });

  it("구분선(|)이 올바르게 표시되어야 한다", () => {
    render(<LoginMoreAction />);
    const dividers = screen.getAllByText("|");

    expect(dividers).toHaveLength(2);
  });
});
