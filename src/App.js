import React, { useState } from "react";
import Button from "./components/Button";
import countapi from 'countapi-js';
import "./App.css";
import "./index.js";

export function Visits() {
  const [visits, setVisits] = useState();
  countapi.get('f1app', '9e640730-1b7c-414d-8bbd-6e14642f19a7').then((result) =>  {
    setVisits(result.value);
})
return (
  <h3>{visits}</h3>
)
}

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

// Bottas
export function Bot() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'bottas', +1).then(() => {
      countapi.get('f1app', 'bottas').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'bottas', -1).then((result) => {
      countapi.get('f1app', 'bottas').then((result) =>  {
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
// End Bottas

// Gasly
export function Gas() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'gasly', +1).then(() => {
      countapi.get('f1app', 'gasly').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'gasly', -1).then((result) => {
      countapi.get('f1app', 'gasly').then((result) =>  {
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
// End Gasly

// Hamilton
export function Ham() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'hamilton', +1).then(() => {
      countapi.get('f1app', 'hamilton').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'hamilton', -1).then((result) => {
      countapi.get('f1app', 'hamilton').then((result) =>  {
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
// End Hamilton

// Hulkenburg
export function Hul() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'hulkenburg', +1).then(() => {
      countapi.get('f1app', 'hulkenburg').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'hulkenburg', -1).then((result) => {
      countapi.get('f1app', 'hulkenburg').then((result) =>  {
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
// End Hulkenburg

// Latifi
export function Lat() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'latifi', +1).then(() => {
      countapi.get('f1app', 'latifi').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'latifi', -1).then((result) => {
      countapi.get('f1app', 'latifi').then((result) =>  {
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
// End Latifi

// Leclerc
export function Lec() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'leclerc', +1).then(() => {
      countapi.get('f1app', 'leclerc').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'leclerc', -1).then((result) => {
      countapi.get('f1app', 'leclerc').then((result) =>  {
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
// End Leclerc

// Magnussen
export function Mag() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'magnussen', +1).then(() => {
      countapi.get('f1app', 'magnussen').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'magnussen', -1).then((result) => {
      countapi.get('f1app', 'magnussen').then((result) =>  {
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
// End Magnussen

// Norris
export function Nor() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'norris', +1).then(() => {
      countapi.get('f1app', 'norris').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'norris', -1).then((result) => {
      countapi.get('f1app', 'norris').then((result) =>  {
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
// End Norris

// Ocon
export function Oco() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'ocon', +1).then(() => {
      countapi.get('f1app', 'ocon').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'ocon', -1).then((result) => {
      countapi.get('f1app', 'ocon').then((result) =>  {
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
// End Ocon

// Perez
export function Per() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'perez', +1).then(() => {
      countapi.get('f1app', 'perez').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'perez', -1).then((result) => {
      countapi.get('f1app', 'perez').then((result) =>  {
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
// End Perez

// Ricciardo
export function Ric() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'ricciardo', +1).then(() => {
      countapi.get('f1app', 'ricciardo').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'ricciardo', -1).then((result) => {
      countapi.get('f1app', 'ricciardo').then((result) =>  {
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
// End Ricciardo

// Russell
export function Rus() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'russell', +1).then(() => {
      countapi.get('f1app', 'russell').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'russell', -1).then((result) => {
      countapi.get('f1app', 'russell').then((result) =>  {
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
// End Russell

// Sainz
export function Sai() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'sainz', +1).then(() => {
      countapi.get('f1app', 'sainz').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'sainz', -1).then((result) => {
      countapi.get('f1app', 'sainz').then((result) =>  {
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
// End Sainz

// Schumacher
export function Sch() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'schumacher', +1).then(() => {
      countapi.get('f1app', 'schumacher').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'schumacher', -1).then((result) => {
      countapi.get('f1app', 'schumacher').then((result) =>  {
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
// End Schumacher

// Stroll
export function Str() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'stroll', +1).then(() => {
      countapi.get('f1app', 'stroll').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'stroll', -1).then((result) => {
      countapi.get('f1app', 'stroll').then((result) =>  {
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
// End Stroll

// Tsunoda
export function Tsu() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'tsunoda', +1).then(() => {
      countapi.get('f1app', 'tsunoda').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'tsunoda', -1).then((result) => {
      countapi.get('f1app', 'tsunoda').then((result) =>  {
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
// End Tsunoda

// Verstappen
export function Ver() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'verstappen', +1).then(() => {
      countapi.get('f1app', 'verstappen').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'verstappen', -1).then((result) => {
      countapi.get('f1app', 'verstappen').then((result) =>  {
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
// End Verstappen

// Vettel
export function Vet() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'vettel', +1).then(() => {
      countapi.get('f1app', 'vettel').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'vettel', -1).then((result) => {
      countapi.get('f1app', 'vettel').then((result) =>  {
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
// End Vettel

// Guanyu
export function Gua() {
  const [count, setCount] = useState();

  let incrementCount = () => {
    countapi.update('f1app', 'guanyu', +1).then(() => {
      countapi.get('f1app', 'guanyu').then((result) =>  {
    setCount(result.value);
    })
  })
}

  let decrementCount = () => {
    countapi.update('f1app', 'guanyu', -1).then((result) => {
      countapi.get('f1app', 'guanyu').then((result) =>  {
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
// End Guanyu








