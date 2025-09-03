import React, { useEffect, useState } from "react";

const Counter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0); // used to re-trigger animation

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [trigger, end, duration]);

  const handleMouseEnter = () => {
    setCount(0); // reset count
    setTrigger(prev => prev + 1); // change trigger to re-run useEffect
  };

  return (
    <span onMouseEnter={handleMouseEnter} style={{ cursor: "pointer" }}>
      {count}
    </span>
  );
};

export default Counter;
