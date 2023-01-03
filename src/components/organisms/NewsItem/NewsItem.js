import styled from 'styled-components';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';
import Button from '../../atoms/Button/Button';

const NewsBody = styled(ViewWrapper)`
  flex-direction: column;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  border-radius: 8px;
  max-width: 500px;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.baseText};
    text-align: justify;
    line-height: 1.4;
  }

  Button {
    width: 120px;
    margin-bottom: 20px;
    border-bottom: none;
    padding-left: 0;
    text-align: left;
  }
`;

const TitleWrapper = styled.div`
  h1 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NewsItem = ({ title, content, category }) => {
  return (
    <NewsBody>
      <TitleWrapper>
        <h1>{title}</h1>
        <p>{category}</p>
      </TitleWrapper>
      <p>{content}</p>
      <Button content="Read more..." />
    </NewsBody>
  );
};

export default NewsItem;
