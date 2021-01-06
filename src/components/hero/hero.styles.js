import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--offWhite);

  .banner {
    width: var(--smallWidth);
    max-width: var(--fullWidth);
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;
    margin-bottom: 0;
    background: #eff1ff;
    background: radial-gradient(ellipse at center, #eff1ff 10%, #000 100%);
    background-size: 54% 156%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .new-product {
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 600;
    letter-spacing: -0.016em;
    color: var(--primaryColor);
    display: block;
  }

  .new-product-title {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0em;
    margin-bottom: 0;
  }

  .new-product-slogan {
    margin-top: 0.25em;
    margin-bottom: 0.88em;
    font-size: 24px;
    line-height: 1.16667;
    font-weight: 600;
    letter-spacing: 0.009em;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 1.75em;
  }

  .btn-hero {
    border-radius: 0;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    background: var(--mainBlack);
    border-color: var(--offWhite);
    line-height: 1.17648;
    color: #fff;

    &:hover {
      color: var(--primaryColor);
    }
  }

  @media screen and (min-width: 768px) {
    .banner {
      margin-top: 0;
    }

    .hero h1 {
      font-size: 5.3rem;
    }
    .hero p {
      font-size: 2.3rem;
    }
    .btn-hero {
      font-size: 1rem;
      padding: 0.75rem 1rem;
    }
  }
`;
