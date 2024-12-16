import { useState } from "react";

type FilterType = "latest" | "popular" | "noAnswer";

export const useFilter = () => {
  const [filter, setFilter] = useState<FilterType>("latest");

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return {
    filter,
    handleFilterChange,
  };
};
