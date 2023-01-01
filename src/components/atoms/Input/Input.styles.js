import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  padding: 5px 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.baseText};
  transition: all 0.2s ease;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    transition: opacity 0.2s ease;
  }
`;
