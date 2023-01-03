import styled from 'styled-components';

export const NewsWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  max-height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.colors.darkestBlue};
  padding: 0 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    align-self: flex-start;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkestBlue};
    border-radius: 10px;
    transition: background-color 0.1s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkestBlueHover};
    }
  }
`;
