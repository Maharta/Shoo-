import styled from 'styled-components';
import { COLORS } from '../../constants';

function SuperHeader({ headline }: { headline: string }) {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  padding: ${12 / 16}rem ${32 / 16}rem;
`;

const Headline = styled.p`
  color: ${COLORS.white};
`;

export default SuperHeader;
