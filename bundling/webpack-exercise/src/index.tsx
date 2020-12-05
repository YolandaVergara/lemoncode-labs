import React from 'react';
import ReactDOM from 'react-dom';
import { SayHello } from './helloComponent';

ReactDOM.render(
  <div>
    <h1>Hola desde React<small>(este mensaje desde index.tsx)</small></h1>
    <SayHello />
  </div>,
  document.getElementById('root')
)
