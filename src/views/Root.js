import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';

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
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Navigate to="/group" />} />
              <Route path="/group/:id" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
