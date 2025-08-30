import React from "react";
import classnames from "classnames";
import "./swi.css";

function Switch({ label, checked, onChange, disabled = false, orientation = "vertical" }: SwitchProps) {
  return (
    <div 
      className={classnames(
        "switch-container",
        {
          "flex-row": orientation === "horizontal",
          "flex-col": orientation === "vertical"
        }
      )}
    >
      <span className="switch-label">{label}</span>
      <div 
        className={classnames(
          "switch",
          {
            "switch-checked": checked,
            "switch-disabled": disabled
          }
        )}
        onClick={() => onChange(!checked)}
      >
        <div className="switch-thumb"></div>
      </div>
    </div>
  );
}

export default Switch;

export interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
}