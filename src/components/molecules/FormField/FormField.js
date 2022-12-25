import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input.styles';
import { Label } from '../../atoms/Label/Label.styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const FormField = ({ label, name, id, type = 'text', value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
