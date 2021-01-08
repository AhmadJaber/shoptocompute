import React from 'react';
import { Wrapper } from './hero.styles';
import background from '../../assets/bg-main.jpeg';

// TODO: see note.md
export default function Hero({ children }) {
  return (
    <Wrapper
      style={{
        background: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(255, 255, 255, 0.1)
    ),
    url(${background}) center/cover no-repeat`,
      }}
    >
      <div className="banner">
        <h1>gaming & coding laptops</h1>
        <p>Best price, anywhere</p>
        {children}
      </div>
    </Wrapper>
  );
}
