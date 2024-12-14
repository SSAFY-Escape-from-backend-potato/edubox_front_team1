import { useState, FormEvent } from "react";
import "./Settings.css";

interface SettingsProps {
  userProfile: {
    name: string;
    bio: string;
  };
  onUpdateProfile: (updates: { name: string; bio: string }) => void;
}

const Settings: React.FC<SettingsProps> = ({
  userProfile,
  onUpdateProfile,
}: SettingsProps) => {
  const [formData, setFormData] = useState({
    name: userProfile.name,
    bio: userProfile.bio,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  return (
    <div className="settings-section">
      <div className="settings-card">
        <h2>계정 설정</h2>
        <form
          className="settings-form"
          id="setting-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="이름을 입력하세요"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">자기소개</label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, bio: e.target.value }))
              }
              placeholder="자기소개를 입력하세요"
            />
          </div>
          <button type="submit" className="btn-primary">
            저장하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
