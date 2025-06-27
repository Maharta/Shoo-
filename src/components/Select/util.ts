import React from 'react';

export const getSelectedValue = (
  children: React.ReactNode,
  selectedValue: string | number | readonly string[] | undefined
): React.ReactNode | null => {
  const flatChildren = React.Children.toArray(children);

  for (const child of flatChildren) {
    if (
      React.isValidElement(child) &&
      (child.props as { value?: string }).value === selectedValue
    ) {
      return (child.props as { children?: React.ReactNode }).children;
    }
  }

  return null;
};

export const getFirstValue = (children: React.ReactNode) => {
  const flatChildren = React.Children.toArray(children);
  const firstChild = flatChildren[0];
  if (React.isValidElement(firstChild)) {
    return (firstChild.props as { value?: string }).value;
  }
  return undefined;
};
