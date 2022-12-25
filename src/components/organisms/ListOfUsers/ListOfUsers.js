import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { users as usersData } from '../../../data/users';
import ListOfUsersItem from '../../molecules/ListOfUsersItem/ListOfUsersItem';
import FormField from '../../molecules/FormField/FormField';

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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px 40px;
  margin: 50px;
  width: 100%;
  max-width: 560px;
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  border-radius: 10px;
  padding: 20px 40px 40px;
  box-shadow: -3px 14px 48px -23px rgba(66, 68, 90, 1);
  color: ${({ theme }) => theme.colors.white};

  h1 {
    align-self: flex-start;
    font-size: 48px;
    margin: 10px auto 30px 0;
  }

  button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBlue};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darkBlue};
    width: 150px;
    padding: 10px;
    align-self: flex-end;
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accent};
      cursor: pointer;
      outline: none;
    }

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accent};
      outline: none;
    }
  }
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

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
  const addUserHandler = (e) => {
    e.preventDefault();
    setUsers([
      {
        name: formValues.name,
        average: formValues.average,
        attendance: formValues.attendance,
      },
      ...users,
    ]);
    setFormValues(initialFormState);
  };

  return (
    <>
      <FormWrapper onSubmit={addUserHandler}>
        <h1>Add new Student</h1>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <button type="submit">Add student</button>
      </FormWrapper>
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
    </>
  );
};

export default ListOfUsers;
