import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  border: none;
  border-bottom: 2px solid #aaa;
  background-color: transparent;
  color: #aaa;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    color: ${({ theme }) => theme.colors.accent};
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }
`;
