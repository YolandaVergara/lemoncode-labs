import React from 'react';
import logo from './content/logoLemoncode.png';

export const SayHello: React.FC = () => {
  console.log(`Api base: ${process.env.API_BASE}`);
  return (
    <React.Fragment>
      <div className="primary-background">Hola mundo <span>(este mensaje desde el componente de React en tsx)</span></div>
      <img src={logo} />
    </React.Fragment>
  )
}