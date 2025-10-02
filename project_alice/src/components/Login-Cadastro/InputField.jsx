import React from "react";
import "../../styles/InputField.css";

export default function InputField({ label, type, placeholder, required }) {
  return (
    <div className="inputGroup">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
}
