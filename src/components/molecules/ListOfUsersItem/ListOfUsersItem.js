import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import {
  Wrapper,
  StyledAverage,
  StyledDetails,
  Container,
} from './ListOfUsersItem.styles';

const ListOfUsersItem = ({
  userData: { name, attendance = '0%', average },
}) => (
  <Wrapper>
    <Container>
      <StyledAverage>{average}</StyledAverage>
      <StyledDetails>
        <p>{name}</p>
        <p>
          attendance:
          {attendance}
        </p>
      </StyledDetails>
    </Container>
    <Container>
      <Button content="X" />
    </Container>
  </Wrapper>
);

ListOfUsersItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default ListOfUsersItem;