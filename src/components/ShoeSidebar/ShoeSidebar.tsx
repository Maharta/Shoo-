import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

function ShoeSideBar() {
  return (
    <aside>
      <nav>
        <ListWrapper>
          <ListItem>
            <ItemLink href="">Lifestyle</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="">Jordan</ItemLink>
          </ListItem>
          <ListItem>
            <ActiveLink href="">Running</ActiveLink>
          </ListItem>
          <ListItem>
            <ItemLink href="">BasketBall</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="">Training & Gym</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="">Football</ItemLink>
          </ListItem>
        </ListWrapper>
      </nav>
    </aside>
  );
}

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 2;
`;

const ListItem = styled.li`
  font-weight: ${WEIGHTS.medium};
  font-size: 1rem;
  color: ${COLORS.gray['900']};
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ActiveLink = styled.a`
  text-decoration: none;
  color: ${COLORS.primary};
`;

export default ShoeSideBar;
