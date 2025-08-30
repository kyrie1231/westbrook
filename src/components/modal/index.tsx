 import classNames from "classnames";
import { X } from "lucide-react";
import React from "react";
import "./index.css";

function Modal({
  showModal,
  onCancel,
  title,
  children,
  size,
}: ModalProps): React.ReactElement {
  if (!showModal) return <></>;

  const containerClass = classNames("modal-container", {
    "w-1": size === "small",
    "w-2": size === "medium",
    "w-3": size === "large",
  });

  return (
    <div className="modal-backdrop">
      <div className={containerClass}>
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          {onCancel && <X className="close-icon" onClick={onCancel} />}
        </div>
        <hr className="modal-divider" />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

export interface ModalProps {
  showModal: boolean;
  onCancel?: () => void;
  title?: string;
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}
