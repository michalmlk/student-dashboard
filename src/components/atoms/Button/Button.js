import styled from 'styled-components';

const StyledButton = styled.button`
  width: 30px;
  height: 40px;
  border: none;
  border-bottom: 2px solid #aaa;
  background-color: transparent;
  color: #aaa;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: ${({ theme }) => theme.colors.accent};
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.content}</StyledButton>;
};

export default Button;
