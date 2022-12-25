import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import ListOfUsers from '../components/organisms/ListOfUsers/ListOfUsers';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkestBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 !important;
`;

const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Routes>
            <Route path="/home" exact element={<ListOfUsers />} />
            <Route path="/add-user" element={<h1>AAAssssss</h1>} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
