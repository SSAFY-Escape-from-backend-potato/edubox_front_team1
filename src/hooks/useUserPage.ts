import { useState } from "react";
import { UserProfile } from "src/model/UserProfile";
import { userProfile_ } from "src/api/MockupData";

type TabType = "profile" | "courses" | "settings";

export const useUserPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    ...userProfile_,
  });

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return {
    activeTab,
    userProfile,
    handleTabChange,
    updateProfile,
  };
};
