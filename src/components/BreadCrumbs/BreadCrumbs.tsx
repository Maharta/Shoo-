import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import type React from 'react';

interface BreadCrumbsProps {
  children?: React.ReactNode;
}

function BreadCrumbs({ children }: BreadCrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ListWrapper>{children}</ListWrapper>
    </nav>
  );
}

interface CrumbProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href: string;
  children: React.ReactNode;
}

BreadCrumbs.Crumb = function ({ href, children, ...delegated }: CrumbProps) {
  return (
    <ListItem {...delegated}>
      <a href={href}>{children}</a>
    </ListItem>
  );
};

const ListWrapper = styled.ol`
  --gap: ${4 / 16}rem;
  list-style-type: none;
  display: flex;
  gap: var(--gap);
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

const ListItem = styled.li`
  & a {
    text-decoration: none;
    color: ${COLORS.gray['700']};
  }

  &:hover a {
    color: black;
  }

  &:not(:first-of-type) {
    &::before {
      content: '/';
      margin-right: var(--gap);
    }
  }
`;

export default BreadCrumbs;
