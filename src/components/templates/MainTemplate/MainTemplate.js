import { Wrapper } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
