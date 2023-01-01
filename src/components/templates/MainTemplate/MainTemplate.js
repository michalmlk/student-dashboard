import styled from 'styled-components';
import { Wrapper } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';
import SearchBar from '../../organisms/SearchBar/SearchBar';

const News = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.colors.darkestBlue};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News />
    </Wrapper>
  );
};

export default MainTemplate;
