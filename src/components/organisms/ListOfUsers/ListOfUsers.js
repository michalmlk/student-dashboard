import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { users } from '../../../data/users';
import ListOfUsersItem from '../../molecules/ListOfUsersItem/ListOfUsersItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 560px;
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  border-radius: 10px;
  padding: 20px 40px;
  box-shadow: -3px 14px 48px -23px rgba(66, 68, 90, 1);
  color: ${({ theme }) => theme.colors.white};
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0;

  h1 {
    align-self: flex-start;
    font-size: 48px;
    margin: 0 auto 30px 20px;
  }
`;

const ListOfUsers = () => {
  return (
    <Wrapper>
      <StyledList>
        <h1>Students</h1>
        {users.map((userData) => (
          <ListOfUsersItem key={uuidv4()} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ListOfUsers;
