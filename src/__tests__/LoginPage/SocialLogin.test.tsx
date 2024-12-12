import { render, screen } from "@testing-library/react";
import SocialLogin from "../../components/LoginPage/SocialLogin";

describe("SocialLogin", () => {
  it("'간편 로그인' 텍스트가 표시되어야 한다", () => {
    render(<SocialLogin />);

    expect(screen.getByText("간편 로그인")).toBeInTheDocument();
  });

  it("소셜 로그인 버튼들이 모두 렌더링되어야 한다", () => {
    render(<SocialLogin />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
  });

  it("각 소셜 로그인 버튼이 올바른 클래스를 가져야 한다", () => {
    render(<SocialLogin />);

    expect(screen.getByRole("button", { name: "카카오 로그인" })).toHaveClass(
      "kakao-btn"
    );
    expect(screen.getByRole("button", { name: "구글 로그인" })).toHaveClass(
      "google-btn"
    );
    expect(screen.getByRole("button", { name: "네이버 로그인" })).toHaveClass(
      "naver-btn"
    );
  });

  // 소셜 로그인 클릭 이벤트 테스트 (실제 구현 시 추가 필요)
  it("소셜 로그인 버튼 클릭 시 해당 로그인 기능이 호출되어야 한다", () => {
    // const mockSocialLogin = jest.fn();
    // fireEvent.click(screen.getByRole("button", { name: "카카오 로그인" }));
    // expect(mockSocialLogin).toHaveBeenCalledWith("kakao");
  });
});
