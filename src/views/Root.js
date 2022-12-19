import styled, { ThemeProvider } from 'styled-components';
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
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <ListOfUsers />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Root;
