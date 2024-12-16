export interface Comment {
  id: number;
  content: string;
  author: {
    id: number;
    name: string;
    profileImage: string;
    questionCount?: number;
  };
  createdAt: string;
  updatedAt?: string;
  likeCount: number;
  isAccepted?: boolean;
}
