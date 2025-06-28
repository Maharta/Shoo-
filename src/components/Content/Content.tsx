import styled from 'styled-components';
import ShoeSideBar from '../ShoeSidebar';
import ShoeItem from '../ShoeItem';

function Content() {
  return (
    <Wrapper>
      <SideBarWrapper>
        <ShoeSideBar />
      </SideBarWrapper>
      <ShoeView>
        <ShoeItemWrapper>
          <ShoeItem
            colorVariant={2}
            imgSrc="/src/assets/tech-challenge.jpg"
            tooltip="Just Released"
            name="NikeCourt Tech Challenge 20"
            price={165}
          />
        </ShoeItemWrapper>
        <ShoeItemWrapper>
          <ShoeItem
            imgSrc="/src/assets/metcon-5.jpg"
            name="Nike Metcon 5 AMP"
            price={165}
            discountedPrice={145}
            colorVariant={1}
            tooltip="Sale"
          />
        </ShoeItemWrapper>
        <ShoeItemWrapper>
          <ShoeItem
            imgSrc="/src/assets/phantom.jpg"
            name="Nike Phantom Vision"
            price={165}
            colorVariant={4}
            tooltip="Just Released"
          />
        </ShoeItemWrapper>
        <ShoeItemWrapper>
          <ShoeItem
            imgSrc="/src/assets/pegasus.jpg"
            name="Nike Air Zoom Pegasus 36 Trail"
            price={165}
            colorVariant={1}
          />
        </ShoeItemWrapper>
        <ShoeItemWrapper>
          <ShoeItem
            imgSrc="/src/assets/joyride.jpg"
            name="Nike Joyride Dual Run"
            price={170}
            discountedPrice={165}
            colorVariant={2}
            tooltip="Sale"
          />
        </ShoeItemWrapper>
        <ShoeItemWrapper>
          <ShoeItem
            imgSrc="/src/assets/legend-academy.jpg"
            name="Nike Tiempo Legend 8 Academy TF"
            price={165}
            discountedPrice={160}
            colorVariant={2}
            tooltip="Sale"
          />
        </ShoeItemWrapper>
      </ShoeView>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const SideBarWrapper = styled.div`
  flex: 1;
`;

const ShoeView = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;

const ShoeItemWrapper = styled.div`
  flex: 1 1 31%;
`;

export default Content;
