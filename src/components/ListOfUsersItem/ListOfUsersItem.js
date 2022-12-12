import PropTypes from 'prop-types';

const ListOfUsersItem = ({
  userData: { name, attendance = '0%', average },
}) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>
        attendance:
        {attendance}
      </p>
    </div>
    <button>X</button>
  </li>
);

ListOfUsersItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default ListOfUsersItem;
