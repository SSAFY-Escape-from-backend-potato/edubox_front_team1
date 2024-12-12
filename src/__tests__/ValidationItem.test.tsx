import { render, screen } from "@testing-library/react";
import ValidationItem from "../components/SignupPage/SignupForm/ValidationItem";

describe("ValidationItem", () => {
  it("기본 상태로 렌더링된다", () => {
    render(
      <ValidationItem isValid={false} isEmpty={true} text="테스트 검증" />
    );
    expect(screen.getByText("테스트 검증")).toBeInTheDocument();

    const icon = screen.getByTestId("validation-icon");
    expect(icon).toHaveClass("fa-solid fa-check");
  });

  it("조건이 충족되었을 때 체크 아이콘을 표시한다", () => {
    render(
      <ValidationItem isValid={true} isEmpty={false} text="테스트 검증" />
    );
    const icon = screen.getByTestId("validation-icon");

    expect(icon).toHaveClass("fa-solid fa-check");
  });

  it("조건이 충족되지 않았을 때 X 아이콘을 표시한다", () => {
    render(
      <ValidationItem isValid={false} isEmpty={false} text="테스트 검증" />
    );
    const icon = screen.getByTestId("validation-icon");
    expect(icon).toHaveClass("fa-solid fa-xmark");
  });
});
