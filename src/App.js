import React, { useState } from "react";
import Button from "./components/Button";
import countapi from 'countapi-js';
import "./App.css";
import "./index.js";


export default function App() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1AppAlbon', 'fbda1857-916b-413d-8b7b-503651f3c52c', +1).then(() => {
      countapi.get('f1AppAlbon', 'fbda1857-916b-413d-8b7b-503651f3c52c').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1AppAlbon', 'fbda1857-916b-413d-8b7b-503651f3c52c', -1).then((result) => {
      countapi.get('f1AppAlbon', 'fbda1857-916b-413d-8b7b-503651f3c52c').then((result) =>  {
        setCount(result.value);
    })
  })
}
   
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

