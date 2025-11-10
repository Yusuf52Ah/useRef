import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const ref = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const changeColor = () => {
    if (ref.current) {
      ref.current.style.color =
        ref.current.style.color === "green" ? "red" : "green";
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 ref={ref}>Counter: {count}</h1>
      <h3>Oldingi qiymat: {prevCount.current}</h3>

      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ marginRight: "10px" }}
      >
        Qo'shish
      </button>

      <button
        onClick={() => setCount((c) => c - 1)}
        style={{ marginRight: "10px" }}
      >
        Ayirish
      </button>

      <button onClick={changeColor}>Rangni o'zgartirish</button>
    </div>
  );
}
