import styled from 'styled-components';
import Header from './components/Header';
import ShoeSideBar from './components/ShoeSidebar';
import MainNav from './components/MainNav';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <MainNav />
        <ShoeSideBar />
        {/* <Select>

        </Select> */}
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  padding: 64px 32px;
`;

export default App;
