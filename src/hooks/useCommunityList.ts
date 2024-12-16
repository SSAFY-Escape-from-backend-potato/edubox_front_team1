import { useState, useEffect } from "react";
import { Question } from "../model/Question";
import { questions } from "../api/MockupData";

export const useCommunityList = (filter: string, searchTerm: string) => {
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      let filtered = [...questions];

      // 필터 적용
      switch (filter) {
        case "popular":
          filtered.sort((a, b) => b.likeCount - a.likeCount);
          break;
        case "noAnswer":
          filtered = filtered.filter((q) => q.commentCount === 0);
          break;
        default:
          filtered.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }

      // 검색어 적용
      if (searchTerm) {
        filtered = filtered.filter(
          (q) =>
            q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredQuestions(filtered);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "데이터를 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, [filter, searchTerm]);

  return { filteredQuestions, loading, error };
};
