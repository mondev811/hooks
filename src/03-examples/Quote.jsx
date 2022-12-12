import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ text = "", footer = "" }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {text}
        </p>
        <footer className="blockquote-footer mt-2">{footer}</footer>
      </blockquote>
      <p>
        width: {boxSize.width}; height: {boxSize.height}
      </p>
    </>
  );
};
