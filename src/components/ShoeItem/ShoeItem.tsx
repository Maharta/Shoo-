import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

interface ShoeItemProps {
  imgSrc: string;
  name: string;
  price: number;
  colorVariant: number;
  discountedPrice?: number;
  tooltip?: 'Sale' | 'Just Released';
}

function ShoeItem({
  imgSrc,
  name,
  price,
  colorVariant,
  discountedPrice,
  tooltip,
}: ShoeItemProps) {
  return (
    <Wrapper>
      <ThumbNail src={imgSrc} />
      {tooltip && <ToolTip>{tooltip}</ToolTip>}
      <TopDetail>
        <ItemName>{name}</ItemName>
        <ItemPrice discountedPrice={discountedPrice}>${price}</ItemPrice>
      </TopDetail>
      <BottomDetail>
        <ColorVariant>{colorVariant} color</ColorVariant>
        {discountedPrice && (
          <DiscountedPrice>${discountedPrice}</DiscountedPrice>
        )}
      </BottomDetail>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  font-size: 1rem;
  position: relative;
`;

const ThumbNail = styled.img`
  width: 100%;
`;

const ToolTip = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;

  width: max-content;
  height: 32px;
  background-color: ${(p) =>
    p.children === 'Sale' ? COLORS.primary : COLORS.secondary};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.lightbold};
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray['900']};
`;

const ItemPrice = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'discountedPrice',
})<{
  discountedPrice?: number;
}>`
  font-weight: ${WEIGHTS.normal};
  color: ${(p) =>
    p.discountedPrice ? COLORS.gray['700'] : COLORS.gray['900']};
  text-decoration: ${(p) => (p.discountedPrice ? 'line-through' : 'none')};
`;

const BottomDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColorVariant = styled.span`
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray['700']};
`;

const DiscountedPrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeItem;
