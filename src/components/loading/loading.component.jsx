import React from 'react';
import { Wrapper } from './loading.styles';
import loading from '../../assets/loading.gif';

export default function Loading() {
  return (
    <Wrapper className="loading">
      <h2>loading...</h2>
      <img src={loading} alt="loading gif" />
    </Wrapper>
  );
}
