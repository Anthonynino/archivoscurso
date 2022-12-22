import React from 'react';
import ReactDOM from 'react-dom/client';
import { MultipleCustomHooks } from './components/03-example/MultipleCustomHooks';
//import { FormWithCustomHook } from './components/02-simpleform/FormWithCustomHook';
//import { SimpleForm } from './components/02-simpleform/simpleForm';
//import { CounterApp } from './components/CounterApp';
//import { CounterWithCustoms } from './components/CounterWithCustoms';
//import { CounterApp } from './components/CounterApp';

//import { HooksApp } from './components/Hooks';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    
  <MultipleCustomHooks />
    
  //</React.StrictMode>
);


