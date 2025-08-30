 import classNames from "classnames";
import { Ban, Check, CircleAlert, Info, X } from "lucide-react";
import React from "react";
import './index.css'; 

function Alert({
  message,
  type = "info",
  description,
  showIcon = true,
  closable = false,
}: AlertProps) { 
  const [showAlert, setShowAlert] = React.useState(true);
  if (!showAlert) return null;

  return (
    <div
      className={classNames("alert-base", {
        "alert-info-bg alert-info-border": type === "info",
        "alert-error-bg alert-error-border": type === "error",
        "alert-success-bg alert-success-border": type === "success",
        "alert-warning-bg alert-warning-border": type === "warning",
      })}
    >
      <div className="flex justify-between">
        <span className="alert-content"> 
          {showIcon && (
            <span>
              {type === "info" && <Info size={14} className="text-blue-500" />}
              {type === "success" && (
                <Check size={14} className="text-green-500" />
              )}
              {type === "error" && <Ban size={14} className="text-red-500" />}
              {type === "warning" && (
                <CircleAlert size={14} className="text-yellow-500" />
              )}
            </span>
          )}
          {message}
        </span>
        {closable && (
          <X
            size={18}
            className="alert-close" 
            onClick={() => setShowAlert(false)}
          />)}
      </div>
    </div>
  );   
}

export default Alert;

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  description?: string;
  showIcon?: boolean;
  closable?: boolean;
}