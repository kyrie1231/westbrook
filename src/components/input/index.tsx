import classNames from "classnames";
import React from "react";
import "./index.css";

function Input({
  value,
  onChange,
  name = "",
  placeholder = "",
  label = "",
  disabled = false,
  type = "text",
  size = "medium",
  rounded = "none",
  error = "",
}: InputProps) {
  return (
    <div className="flex-col-layout">
      <label htmlFor={`input-${name}`} className="label-color">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={classNames(
          "input-px-medium",
          {
            "input-h-medium": size === "medium",
            "input-h-small": size === "small",
            "input-h-large": size === "large",
            "input-rounded-none": rounded === "none",
            "input-rounded-small": rounded === "small",
            "input-rounded-medium": rounded === "medium",
            "input-rounded-large": rounded === "large",
            "input-rounded-full": rounded === "full",
            "input-error-border": error,
            "input-disabled": disabled,
          }
        )}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

export default Input;

export interface InputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  label?: string;    
  disabled?: boolean;
  type?: "text" | "number" | "password";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  error?: string;
} 