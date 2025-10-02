import React from "react";

export default function Character({ img, alt }) {
  return <img src={img} alt={alt} className="characterImage" />;
}
