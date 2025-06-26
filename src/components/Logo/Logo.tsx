import styled from 'styled-components';
import { WEIGHTS } from '../../constants';
import React from 'react';

function Logo(props: React.ComponentProps<'h1'>) {
  return (
    <Link>
      <Wrapper {...props}>Sole&Ankle</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
