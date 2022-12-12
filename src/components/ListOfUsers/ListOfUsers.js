import { v4 as uuidv4 } from 'uuid';
import { users } from '../../data/users';
import ListOfUsersItem from '../ListOfUsersItem/ListOfUsersItem';

const ListOfUsers = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <ListOfUsersItem key={uuidv4()} userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default ListOfUsers;
