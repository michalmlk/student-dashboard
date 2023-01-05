import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ListOfUsersItem from '../../molecules/ListOfUsersItem/ListOfUsersItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 560px;
  max-height: 70vh;
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: -3px 14px 48px -23px rgba(66, 68, 90, 1);
  color: ${({ theme }) => theme.colors.white};
  overflow-y: hidden;

  h1 {
    align-self: flex-start;
    font-size: 48px;
    position: sticky;
    width: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    padding: 20px;
    margin: 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 10px;
  grid-area: 2 / 2;
  position: relative;
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

const ListOfUsers = ({ users }) => {
  return (
    <Wrapper>
      <h1>{users.length > 0 ? 'Students' : 'List is empty'}</h1>
      <StyledList>
        {users.map((userData) => (
          <ListOfUsersItem key={uuidv4()} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ListOfUsers;
