import { useContext } from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { UsersContext } from '../providers/UsersProvider';
import { useForm } from '../hooks/useForm';
import { FormWrapper } from '../components/molecules/FormWrapper/FormWrapper.styles';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    handleClearForm(initialFormState);
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
