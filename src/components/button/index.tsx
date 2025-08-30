import React from "react";
import classNames from "classnames";
import "./index.css";

function Button({ title, variant = "outlined", onClick, disabled, size = "large", rounded = "none", icon, iconPosition,loading=false}: ButtonProps) {
  const className = classNames(
    "btn Search",
    {
      "btn-outlined": variant === "outlined",
      "btn-contained": variant === "contained",
      "btn-disabled": disabled,
      "btn-size-small": size === "small",
      "btn-size-medium": size === "medium",
      "btn-size-large": size === "large",
      "btn-rounded-none": rounded === "none",
      "btn-rounded-small": rounded === "small",
      "btn-rounded-medium": rounded === "medium",
      "btn-rounded-large": rounded === "large",  
       "btn-rounded-full": rounded === "full",
      "btn-with-icon":icon,
      "btn-icon-right":icon&&iconPosition ==='right',
    }
  );

  return (
    <button onClick={onClick} className={className} >
      {title} {icon&&icon} {loading&&<div className={classNames(
        "loading-spinner",
        {
          "contained":variant ==="outlined",
          "outlined":variant ==="contained",

        }
      )}></div>
    }
    </button>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large"|"full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right"
  loading?:boolean;
}
