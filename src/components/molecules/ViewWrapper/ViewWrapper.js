import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkestBlue};
  width: 100%;
  padding: 40px 50px;
  border-radius: 25px;
`;
