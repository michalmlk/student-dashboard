import { StyledButton } from './Button.styles';

const Button = (props) => {
  return <StyledButton {...props}>{props.content}</StyledButton>;
};

export default Button;
