import "./ValidationItem.css";

interface ValidationItemProps {
  isValid: boolean;
  isEmpty: boolean;
  text: string;
}

const ValidationItem = ({ isValid, isEmpty, text }: ValidationItemProps) => {
  return (
    <div
      className={`validation-item ${
        isEmpty ? "" : isValid ? "valid" : "invalid"
      }`}
    >
      <i
        data-testid="validation-icon"
        className={`fa-solid ${
          isEmpty ? "fa-check" : isValid ? "fa-check" : "fa-xmark"
        }`}
      ></i>
      <span>{text}</span>
    </div>
  );
};

export default ValidationItem;
