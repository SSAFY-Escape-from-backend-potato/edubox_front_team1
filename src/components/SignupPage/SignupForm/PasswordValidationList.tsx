import ValidationItem from "./ValidationItem";
import "./PasswordValidationList.css";

interface PasswordValidationListProps {
  password: string;
  passwordValidation: {
    hasTwoTypes: boolean;
    hasValidLength: boolean;
    hasNoConsecutive: boolean;
  };
}

const PasswordValidationList = ({
  password,
  passwordValidation,
}: PasswordValidationListProps) => {
  return (
    <div className="password-validation-list">
      <ValidationItem
        isValid={passwordValidation.hasTwoTypes}
        isEmpty={password === ""}
        text="영문/숫자/특수문자 중 2가지 이상 포함"
      />
      <ValidationItem
        isValid={passwordValidation.hasValidLength}
        isEmpty={password === ""}
        text="8자 이상 32자 이하 입력 (공백 제외)"
      />
      <ValidationItem
        isValid={passwordValidation.hasNoConsecutive}
        isEmpty={password === ""}
        text="연속 3자 이상 동일한 문자/숫자 제외"
      />
    </div>
  );
};

export default PasswordValidationList;
