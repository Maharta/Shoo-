import styled from 'styled-components';
import { Search, Menu, ShoppingBag, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

type IconId = keyof typeof icons;

interface IconProp {
  id: IconId;
  color?: string;
  size: number;
  strokeWidth: number;
}

function Icon({ id, color, size, strokeWidth, ...delegated }: IconProp) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper {...delegated}>
      <Component strokeWidth={strokeWidth} color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;

export default Icon;
