import { render, screen } from "@testing-library/react";
import Banner from "../../components/MainPage/Banner";

describe("Banner", () => {
  it("배너 제목이 화면에 표시된다", () => {
    render(<Banner />);
    const title = screen.getByText("에듀박스에서 성장을 시작하세요");

    expect(title).toBeInTheDocument();
  });

  it("배너 설명이 화면에 표시된다", () => {
    render(<Banner />);
    const description = screen.getByText("더 나은 코딩 교육을 위한 모든 것");

    expect(description).toBeInTheDocument();
  });
});
