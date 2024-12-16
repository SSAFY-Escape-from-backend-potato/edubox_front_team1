export interface Question {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    profileImage: string;
  };
  createdAt: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  tags?: string[];
}
