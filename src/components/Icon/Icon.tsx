import styled from 'styled-components';
import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
  type Icon,
} from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

type IconId = keyof typeof icons;

interface IconProp {
    id: IconId,
    color: string,
    size: string,
    strokeWidth: number
}

const Icon = ({ id, color, size, strokeWidth, ...delegated } : IconProp) => {
  const Component: Icon = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper {...delegated}>
      <Component strokeWidth={strokeWidth} color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;

export default Icon;
