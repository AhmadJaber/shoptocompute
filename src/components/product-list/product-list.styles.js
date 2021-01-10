import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  padding: 4rem 0;

  .product-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
  }
`;
