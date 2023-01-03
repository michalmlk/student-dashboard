import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkestBlue};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  gap: 1rem;

  input {
    width: 100%;
    max-width: 350px;
  }

  button {
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.baseText};
    color: ${({ theme }) => theme.colors.baseText};
    font-size: 18px;
    transition: all 0.2s ease;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.baseText};
  font-size: 18px;
  margin-right: 2rem;

  p {
    margin: 0;
  }

  p:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 16px;
  }
`;
