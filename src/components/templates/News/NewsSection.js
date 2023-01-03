import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsWrapper, NewsContainer } from './NewsSection.styles';
import NewsItem from '../../organisms/NewsItem/NewsItem';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
        .post(
          'https://graphql.datocms.com/',
          {
            query: `
          {
            allArticles {
                id
                title
                category
                content
                _status
                _firstPublishedAt
            }
            _allArticlesMeta {
                count
            }
          }
        `,
          },
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            },
          }
        )
        .then(({ data: { data } }) => setNews(data.allArticles))
        .catch(() => setError("Sorry, we couldn't load data."));
    }, 500);
  }, []);

  return (
    <NewsWrapper>
      <h1>News section</h1>
      <NewsContainer>
        {news.length > 0 ? (
          news.map(({ title, category, content, id }) => {
            return (
              <NewsItem
                key={id}
                title={title}
                category={category}
                content={content}
              />
            );
          })
        ) : !error ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{error}</h1>
        )}
      </NewsContainer>
    </NewsWrapper>
  );
};

export default NewsSection;
