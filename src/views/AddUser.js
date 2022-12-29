import { useState, useContext } from 'react';
import styled from 'styled-components';
import FormField from '../components/molecules/FormField/FormField';
import { UsersContext } from '../providers/UsersProvider';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <FormWrapper onSubmit={handleSubmitUser}>
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
  );
};

export default AddUser;
