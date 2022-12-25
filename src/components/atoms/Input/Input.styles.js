import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.baseText};
  transition: all 0.2s ease;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }
`;
