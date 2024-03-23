import "./App.css";
import React, { useEffect, useState } from "react";

const Recursion = ({ level = 0, parentCount = 1, remove }) => {
  const [children, setChildren] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(children);
  }, [children, level]);

  const add = () => {
    const child = {
      id: `child-${level}-${count}`,
      level: level + 1,
      parentCount: count,
    };
    setChildren([...children, child]);
    setCount(count + 1);
  };

  const removeChild = (id) => {
    setChildren(children.filter((child) => child.id !== id));
  };

  return (
    <div className="wrapper">
      <span>{parentCount}</span>
      <button onClick={add}>+</button>
      {level > 0 && <button onClick={remove}>-</button>}
      {children.map((child) => (
        <Recursion
          key={child.id}
          level={child.level}
          parentCount={child.parentCount}
          remove={() => removeChild(child.id)}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Recursion />
    </div>
  );
};

export default App;
