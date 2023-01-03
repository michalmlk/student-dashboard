import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsWrapper, NewsContainer } from './NewsSection.styles';
import NewsItem from '../../organisms/NewsItem/NewsItem';

const API_TOKEN = 'bf2adce17cff6361f116534973858d';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
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
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setNews(data.allArticles))
      .catch((err) => console.log(err));
  });

  return (
    <NewsWrapper>
      <h1>News section</h1>
      <NewsContainer>
        {news.length > 0 ? (
          news.map(({ title, category, content }) => {
            return (
              <NewsItem title={title} category={category} content={content} />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </NewsContainer>
    </NewsWrapper>
  );
};

export default NewsSection;
