import React from "react";

export default function InputField({ label, type, placeholder, required, error }) {
  return (
    <div className="inputGroup">
      <label className={error ? "errorLabel" : ""}>{label}</label>
      <input type={type} placeholder={placeholder} required={required} className={error ? "inputError" : ""} />
    </div>
  );
}
