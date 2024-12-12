import { render, screen } from "@testing-library/react";
import CourseCard from "../../components/MainPage/CourseCard";
import { Course } from "src/model/Course";

const mockCourse: Course = {
  id: 1,
  title: "React 기초",
  instructor: "홍길동",
  rating: 4.5,
  price: "₩30,000",
  thumbnail: "https://picsum.photos/300/200",
};

describe("CourseCard", () => {
  it("강의 카드가 올바르게 렌더링 된다", () => {
    render(<CourseCard key={mockCourse.id} course={mockCourse} />);

    expect(screen.getByText(mockCourse.title)).toBeInTheDocument();
    expect(screen.getByText(mockCourse.instructor)).toBeInTheDocument();
    expect(screen.getByText(mockCourse.price)).toBeInTheDocument();
  });

  it("썸네일 이미지가 올바르게 렌더링 된다", () => {
    render(<CourseCard key={mockCourse.id} course={mockCourse} />);
    const imgElement = screen.getByAltText(mockCourse.title);

    expect(imgElement).toHaveAttribute("src", mockCourse.thumbnail);
  });
});
