import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";
import "./index.js";


export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };
   
  return (
    
    <div className="app">
      <div>
        <div class="count">
          <h3>Likes:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} id="plus" class="minus"></Button>
          <Button title={"+"} action={incrementCount} id="plus" class="plus"></Button>
        </div>
      </div>
    </div>
  );
}

