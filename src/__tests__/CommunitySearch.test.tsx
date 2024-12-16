import { render, screen, fireEvent } from "@testing-library/react";
import CommunitySearch from "../components/CommunityPage/CommunitySearch";

describe("커뮤니티 검색", () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("검색 입력창을 렌더링한다", () => {
    render(<CommunitySearch onSearch={mockOnSearch} />);
    expect(
      screen.getByPlaceholderText("검색어를 입력해주세요")
    ).toBeInTheDocument();
  });

  it("검색어 입력 시 값이 업데이트된다", () => {
    render(<CommunitySearch onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("검색어를 입력해주세요");

    fireEvent.change(input, { target: { value: "리액트" } });
    expect(input).toHaveValue("리액트");
  });

  it("폼 제출 시 검색 함수가 호출된다", () => {
    render(<CommunitySearch onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("검색어를 입력해주세요");

    fireEvent.change(input, { target: { value: "리액트" } });
    // form 요소 대신 직접 submit 이벤트를 발생시킵니다
    fireEvent.submit(screen.getByTestId("search-form"));

    expect(mockOnSearch).toHaveBeenCalledWith("리액트");
  });
});
