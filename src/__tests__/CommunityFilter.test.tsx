import { render, screen, fireEvent } from "@testing-library/react";
import CommunityFilter from "../components/CommunityPage/CommunityFilter";

describe("커뮤니티 필터", () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("모든 필터 버튼을 렌더링한다", () => {
    render(
      <CommunityFilter
        currentFilter="latest"
        onFilterChange={mockOnFilterChange}
      />
    );

    expect(screen.getByText("최신순")).toBeInTheDocument();
    expect(screen.getByText("인기순")).toBeInTheDocument();
    expect(screen.getByText("답변 대기")).toBeInTheDocument();
  });

  it("현재 선택된 필터를 강조 표시한다", () => {
    render(
      <CommunityFilter
        currentFilter="popular"
        onFilterChange={mockOnFilterChange}
      />
    );

    expect(screen.getByText("인기순")).toHaveClass("active");
  });

  it("필터 클릭 시 변경 함수를 호출한다", () => {
    render(
      <CommunityFilter
        currentFilter="latest"
        onFilterChange={mockOnFilterChange}
      />
    );

    fireEvent.click(screen.getByText("인기순"));
    expect(mockOnFilterChange).toHaveBeenCalledWith("popular");
  });
});
