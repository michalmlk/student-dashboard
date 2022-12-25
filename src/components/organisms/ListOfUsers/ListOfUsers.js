import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { users as usersData } from '../../../data/users';
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
// eslint-disable-next-line no-unused-vars
const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(`Failed to fetch users ${err.message}`));
  }, []);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        <h1>{isLoading ? 'Loading...' : 'Students'}</h1>
        {users.map((userData) => (
          <ListOfUsersItem
            key={uuidv4()}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ListOfUsers;
