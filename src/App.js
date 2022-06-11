import React, { useState } from "react";
import Button from "./components/Button";
import countapi from 'countapi-js';
import "./App.css";
import "./index.js";

// Albon
export function Alb() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'albon', +1).then(() => {
      countapi.get('f1app', 'albon').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'albon', -1).then((result) => {
      countapi.get('f1app', 'albon').then((result) =>  {
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

// Endo Albon

// Alonzo
export function Alo() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'alonzo', +1).then(() => {
      countapi.get('f1app', 'alonzo').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'alonzo', -1).then((result) => {
      countapi.get('f1app', 'alonzo').then((result) =>  {
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
// Endo Alonzo


