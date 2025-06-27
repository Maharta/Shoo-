import styled from 'styled-components';
import BreadCrumbs from '../BreadCrumbs';
import { COLORS, WEIGHTS } from '../../constants';
import Select from '../Select';

function MainNav() {
  return (
    <Wrapper>
      <BreadCrumbWrapper>
        <BreadCrumbs>
          <BreadCrumbs.Crumb href="">Home</BreadCrumbs.Crumb>
          <BreadCrumbs.Crumb href="">Sale</BreadCrumbs.Crumb>
          <BreadCrumbs.Crumb href="">Shoes</BreadCrumbs.Crumb>
        </BreadCrumbs>
      </BreadCrumbWrapper>
      <CategoryHeading>Running</CategoryHeading>
      <SortWrapper>
        <span>Sort</span>
        <Select>
          <Select.Option value="new">Newest Releases</Select.Option>
          <Select.Option value="cat">Cat</Select.Option>
          <Select.Option value="hamster">Hamster</Select.Option>
          <Select.Option value="parrot">Parrot</Select.Option>
          <Select.Option value="spider">Spider</Select.Option>
          <Select.Option value="goldfish">Goldfish</Select.Option>
        </Select>
      </SortWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const BreadCrumbWrapper = styled.div`
  flex: 1;
`;

const CategoryHeading = styled.h2`
  flex: 2;

  color: ${COLORS.gray['900']};
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const SortWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export default MainNav;
