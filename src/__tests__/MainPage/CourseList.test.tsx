import { render, screen, fireEvent } from "@testing-library/react";
import CourseList from "../../components/MainPage/CourseList";

describe("CourseList", () => {
  it("왼쪽 스크롤 버튼이 비활성화되어 있는가", () => {
    render(<CourseList />);
    const leftButton = screen.getByText("<");

    expect(leftButton).toBeDisabled();
  });

  it("오른쪽 스크롤 버튼이 활성화되어 있는가", () => {
    render(<CourseList />);
    const rightButton = screen.getByText(">");

    expect(rightButton).not.toBeDisabled();
  });

  it("스크롤 위치에 따라 버튼 상태가 업데이트된다", () => {
    render(<CourseList />);
    const scrollContainer = screen.getByTestId("course-grid");
    const leftButton = screen.getByText("<");

    fireEvent.scroll(scrollContainer, { target: { scrollLeft: 296 } });

    expect(leftButton).not.toBeDisabled();
  });
});
