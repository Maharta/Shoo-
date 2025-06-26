import styled from 'styled-components';
import { COLORS } from '../../constants';
import SearchInput from '../SearchInput';
import Icon from '../Icon';

function SuperHeader({ headline }: { headline: string }) {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <SearchInput iconColor={COLORS.white} />
      <HelpLink href="www.google.com">Help</HelpLink>
      <StyledIcon
        id="shopping-bag"
        size={24}
        strokeWidth={1}
        color={COLORS.white}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${COLORS.white};
  background-color: ${COLORS.gray[900]};
  padding: ${12 / 16}rem ${32 / 16}rem;
  font-weight: 500;
  font-size: ${14 / 16}rem;
`;

const Headline = styled.p`
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
  flex-basis: 24px;
`;

export default SuperHeader;
