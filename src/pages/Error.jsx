import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

export default function Error() {
  return (
    <ErrorSection>
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to={HOME} className="btn btn-primary">
          back home
        </Link>
      </div>
    </ErrorSection>
  );
}

const ErrorSection = styled.section`
  padding: 4rem 0;
  display: flex;
  justify-content: center;

  .error-container {
    text-align: center;
    text-transform: capitalize;
  }
`;
