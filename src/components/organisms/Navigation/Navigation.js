import {
  StyledNavLink,
  StyledNavigation,
  StyledList,
} from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <h1>My dashboard</h1>
      <StyledList>
        <StyledNavLink to="/group">Home</StyledNavLink>
        <StyledNavLink to="/add-user">Add user</StyledNavLink>
      </StyledList>
    </StyledNavigation>
  );
};
export default Navigation;
