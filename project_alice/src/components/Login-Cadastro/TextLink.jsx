import React from "react";
import { Link } from "react-router-dom";

export default function TextLink({ text, to }) {
  return (
    <p className="linkText">
      {text} <Link to={to}>CLIQUE AQUI</Link>
    </p>
  );
}
