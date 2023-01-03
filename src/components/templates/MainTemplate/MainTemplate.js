import { Wrapper } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../News/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
