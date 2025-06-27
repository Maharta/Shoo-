import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import { useState } from 'react';

import React from 'react';
import Icon from '../Icon';
import { getFirstValue, getSelectedValue } from './util';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  delegatedOnChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({ children, delegatedOnChange, ...delegated }: SelectProps) {
  const [selectedVal, setSelectedVal] = useState(getFirstValue(children));

  const selected = getSelectedValue(children, selectedVal);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (delegatedOnChange) {
      delegatedOnChange(e);
    }
    setSelectedVal(e.target.value);
  };

  return (
    <Wrapper>
      <NativeSelect onChange={onSelectChange} {...delegated}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <span>{selected}</span>
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1.5} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

Select.Option = function ({ children, ...delegated }: OptionProps) {
  return <option {...delegated}>{children}</option>;
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: ${COLORS.gray['100']};
  width: max-content;
  border-radius: 8px;
  padding: 12px 16px;

  font-size: 1rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray['700']};

  ${NativeSelect}:hover + & {
    color: black;
  }

  ${NativeSelect}:focus + & {
    outline-offset: 2px;
    outline: auto;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: -2px;
`;

export default Select;
