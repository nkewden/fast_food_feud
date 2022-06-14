import * as React from "react";
import "./Chip.css";

export function Chip({
  label = "",
  isActive = false,
  onClick = () => {},
  onClose = () => {},
}) {
  let buttonClassName = " ";
  if (!isActive) {
    buttonClassName = "chip";
  } else {
    buttonClassName = "chip active";
  }
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  );
}

export default Chip;
