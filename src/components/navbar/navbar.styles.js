import styled from 'styled-components/macro';

export const Header = styled.header`
  padding: 2em 0 1em;

  .logo {
    margin: 0 auto;
    width: 11rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: var(--smallWidth);
    margin: 0 auto;
    margin-top: 1.25em;
    max-width: var(--maxWidth);

    div {
      display: flex;
      align-items: center;
    }
  }

  a {
    text-transform: capitalize;
    margin: 0 0.25rem;
    font-size: 0.85rem;
    letter-spacing: 2px;
    transition: var(--mainTransition);

    &:hover {
      color: var(--primaryColor);
    }
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.5rem;
      margin: 0 0.5rem;
    }
  }
`;
