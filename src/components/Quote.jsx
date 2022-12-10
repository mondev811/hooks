import React from "react";

export const Quote = ({ text = "", footer = "" }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{text}</p>
      <footer className="blockquote-footer mt-2">{footer}</footer>
    </blockquote>
  );
};
