import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);

      /* If this clean up is not done, the event listener will remain after
      the component is unmounted and will cause an error when trying to 
      update the state of a component that does not exist */
    };
  }, []);

  return (
    <>
      <h3>Bingo!</h3>
      {`Mouse location: x:${coords.x}, y: ${coords.y}`}
    </>
  );
};
