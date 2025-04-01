import { ChangeEvent } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      <span className="checkmark">
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
            stroke={checked ? "#FFFFFF" : "#878787"}
            strokeLinecap="round"
          />
        </svg>
      </span>
    </label>
  );
};

export default Checkbox;
