import styled from 'styled-components';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <MainNavWrapper>
          <MainNav />
        </MainNavWrapper>
        <Content />
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  padding: 64px 32px;
`;

const MainNavWrapper = styled.div`
  margin-bottom: 32px;
`;

export default App;
