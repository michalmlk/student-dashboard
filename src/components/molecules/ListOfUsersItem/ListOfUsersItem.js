import PropTypes from 'prop-types';
import { useContext } from 'react';
import Button from '../../atoms/Button/Button';
import {
  Wrapper,
  StyledAverage,
  StyledDetails,
  Container,
} from './ListOfUsersItem.styles';
import { UsersContext } from '../../../providers/UsersProvider';

const ListOfUsersItem = ({
  userData: { name, attendance = '0%', average },
}) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <Container>
        <StyledAverage avg={parseInt(average, 10)}>{average}</StyledAverage>
        <StyledDetails>
          <p>{name}</p>
          <p>
            attendance:
            {attendance}
          </p>
        </StyledDetails>
      </Container>
      <Container>
        <Button content="X" onClick={() => deleteUser(name)} />
      </Container>
    </Wrapper>
  );
};

ListOfUsersItem.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default ListOfUsersItem;
