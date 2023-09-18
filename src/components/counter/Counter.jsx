import React, { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}
