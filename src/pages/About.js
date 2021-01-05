import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <AboutSection>
      <h1 className="section-title">about us</h1>
      <p>
        Lorem ipsum dolor amet pok pok blue bottle fanny pack bushwick
        mumblecore photo booth. Unicorn coloring book letterpress small batch,
        before they sold out pour-over four loko ethical. Gentrify letterpress
        XOXO, kale chips occupy mumblecore pickled cred sustainable. Hot chicken
        brooklyn vape chartreuse 3 wolf moon chicharrones ugh synth craft beer
        sustainable. Occupy sriracha keytar paleo migas, fashion axe taxidermy
        lumbersexual pabst swag bitters drinking vinegar fingerstache put a bird
        on it semiotics.
      </p>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  padding: 4rem 0;
  width: var(--smallWidth);
  max-width: var(--maxWidth);
  margin: 0 auto;

  p {
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;
