import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  padding: 2rem;
  h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.darkBlue};
  text-decoration: none;
  font-size: 22px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;
