import React from 'react';
import { Wrapper } from './hero.styles';
import background from '../../assets/bg-mac.jpeg';

export default function Hero({ children }) {
  return (
    <Wrapper
      style={{
        background: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(255, 255, 255, 0.1)
    ),
    url(${background}) left 0% top 20%/cover no-repeat`,
      }}
    >
      <div className="banner">
        <h1>think, code, deploy</h1>
        <p>Embrace your choices - we do</p>
        {children}
      </div>
    </Wrapper>
  );
}
