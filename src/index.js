
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import countapi from 'countapi-js';
import "./App.js";


import {Alb} from './App';
import {Alo} from './App';
import {Bot} from './App';
import {Gas} from './App';
import {Ham} from './App';
import {Hul} from './App';
import {Lat} from './App';
import {Lec} from './App';
import {Mag} from './App';
import {Nor} from './App';
import {Oco} from './App';
import {Per} from './App';
import {Ric} from './App';
import {Rus} from './App';
import {Sai} from './App';
import {Sch} from './App';
import {Str} from './App';
import {Tsu} from './App';
import {Ver} from './App';
import {Vet} from './App';
import {Gua} from './App';

import {Visits} from './App';


const alb = ReactDOM.createRoot(document.getElementById('alb'));
alb.render(
  <React.StrictMode>
    <Alb />
  </React.StrictMode>
);

const alo = ReactDOM.createRoot(document.getElementById('alo'));
alo.render(
  <React.StrictMode>
    <Alo />
  </React.StrictMode>
);

const ver = ReactDOM.createRoot(document.getElementById('ver'));
ver.render(
  <React.StrictMode>
    <Ver />
  </React.StrictMode>
);

const lec = ReactDOM.createRoot(document.getElementById('lec'));
lec.render(
  <React.StrictMode>
    <Lec />
  </React.StrictMode>
);

const per = ReactDOM.createRoot(document.getElementById('per'));
per.render(
  <React.StrictMode>
    <Per />
  </React.StrictMode>
);

const rus = ReactDOM.createRoot(document.getElementById('rus'));
rus.render(
  <React.StrictMode>
    <Rus />
  </React.StrictMode>
);

const sai = ReactDOM.createRoot(document.getElementById('sai'));
sai.render(
  <React.StrictMode>
    <Sai />
  </React.StrictMode>
);

const ham = ReactDOM.createRoot(document.getElementById('ham'));
ham.render(
  <React.StrictMode>
    <Ham />
  </React.StrictMode>
);

const nor = ReactDOM.createRoot(document.getElementById('nor'));
nor.render(
  <React.StrictMode>
    <Nor />
  </React.StrictMode>
);

const bot = ReactDOM.createRoot(document.getElementById('bot'));
bot.render(
  <React.StrictMode>
    <Bot />
  </React.StrictMode>
);

const oco = ReactDOM.createRoot(document.getElementById('oco'));
oco.render(
  <React.StrictMode>
    <Oco />
  </React.StrictMode>
);

const mag = ReactDOM.createRoot(document.getElementById('mag'));
mag.render(
  <React.StrictMode>
    <Mag />
  </React.StrictMode>
);

const ric = ReactDOM.createRoot(document.getElementById('ric'));
ric.render(
  <React.StrictMode>
    <Ric />
  </React.StrictMode>
);

const tsu = ReactDOM.createRoot(document.getElementById('tsu'));
tsu.render(
  <React.StrictMode>
    <Tsu />
  </React.StrictMode>
);

const gas = ReactDOM.createRoot(document.getElementById('gas'));
gas.render(
  <React.StrictMode>
    <Gas />
  </React.StrictMode>
);

const vet = ReactDOM.createRoot(document.getElementById('vet'));
vet.render(
  <React.StrictMode>
    <Vet />
  </React.StrictMode>
);

const str = ReactDOM.createRoot(document.getElementById('str'));
str.render(
  <React.StrictMode>
    <Str />
  </React.StrictMode>
);

const gua = ReactDOM.createRoot(document.getElementById('gua'));
gua.render(
  <React.StrictMode>
    <Gua />
  </React.StrictMode>
);

const sch = ReactDOM.createRoot(document.getElementById('sch'));
sch.render(
  <React.StrictMode>
    <Sch />
  </React.StrictMode>
);

const hul = ReactDOM.createRoot(document.getElementById('hul'));
hul.render(
  <React.StrictMode>
    <Hul />
  </React.StrictMode>
);

const lat = ReactDOM.createRoot(document.getElementById('lat'));
lat.render(
  <React.StrictMode>
    <Lat />
  </React.StrictMode>
);

const visits = ReactDOM.createRoot(document.getElementById('visits'));
visits.render(
  <React.StrictMode>
    <Visits />
  </React.StrictMode>
);



// sample api track
// {"namespace":"f1AppAlbon","key":"fbda1857-916b-413d-8b7b-503651f3c52c","value":0}

// var plus = App.querySelector('[title="plus"]');

// works with one btn so far, cannot figure out how to call the class name
// or specific plus/minus button from App.js

// document.getElementById("+alb").addEventListener("click", () => {
//   countapi.update('f1AppAlbon', 'fbda1857-916b-413d-8b7b-503651f3c52c', +1).then((result) => {
//     alert(`The magic button has been pressed ${result.value} times.`);
//   });
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
