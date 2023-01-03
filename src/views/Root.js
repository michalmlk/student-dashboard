import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import UsersProvider from '../providers/UsersProvider';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkestBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  margin: 0 !important;
`;

const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <MainTemplate>
            <Wrapper>
              <Routes>
                <Route path="/home" exact element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </Wrapper>
          </MainTemplate>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
