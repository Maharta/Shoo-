import styled from 'styled-components';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader/SuperHeader';
import { COLORS } from '../../constants';

function Header() {
  return (
    <header>
      <SuperHeader headline="Free shipping on domestic orders over $75!" />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="">SALE</NavLink>
          <NavLink href="">NEW RELEASES</NavLink>
          <NavLink href="">MEN</NavLink>
          <NavLink href="">WOMEN</NavLink>
          <NavLink href="">KIDS</NavLink>
          <NavLink href="">COLLECTIONS</NavLink>
        </Nav>
        <EmptySpace />
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  padding: ${21 / 16}rem 2rem;
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.gray['300']};
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

// added the third child of flexbox for centering
const EmptySpace = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  font-size: ${18 / 16}rem;
  white-space: nowrap;
`;

export default Header;
