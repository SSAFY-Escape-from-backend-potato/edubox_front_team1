import { Course } from "src/model/Course";
import { UserProfile } from "src/model/UserProfile";
import { User } from "src/model/User";

export const courses: Course[] = [
  {
    id: 1,
    title: "React 기초",
    instructor: "홍길동",
    rating: 4.5,
    price: "₩30,000",
    thumbnail: "https://picsum.photos/300/200",
  },
  {
    id: 2,
    title: "TypeScript 완벽 가이드",
    instructor: "김철수",
    rating: 4.8,
    price: "₩40,000",
    thumbnail: "https://picsum.photos/300/201",
  },
  {
    id: 3,
    title: "Node.js로 백엔드 개발하기",
    instructor: "이영희",
    rating: 4.7,
    price: "₩35,000",
    thumbnail: "https://picsum.photos/300/202",
  },
  {
    id: 4,
    title: "프론트엔드 개발의 모든 것",
    instructor: "박민수",
    rating: 4.9,
    price: "₩50,000",
    thumbnail: "https://picsum.photos/300/203",
  },
  {
    id: 5,
    title: "CSS로 예쁜 웹사이트 만들기",
    instructor: "김지현",
    rating: 4.3,
    price: "₩20,000",
    thumbnail: "https://picsum.photos/300/204",
  },
  {
    id: 6,
    title: "Python 데이터 분석",
    instructor: "정하늘",
    rating: 4.6,
    price: "₩45,000",
    thumbnail: "https://picsum.photos/300/205",
  },
  {
    id: 7,
    title: "Go 언어로 배우는 고성능 프로그래밍",
    instructor: "최성훈",
    rating: 4.4,
    price: "₩38,000",
    thumbnail: "https://picsum.photos/300/206",
  },
];

export const userProfile_: UserProfile = {
  name: "묵호",
  email: "mukho@edubox.com",
  bio: "Made By Mukho",
  image: "https://picsum.photos/300/207",
  completedCourses: 3,
  reviews: 0,
};

export const user_: User = {
  id: 1,
  email: "mukho@edubox.com",
};
