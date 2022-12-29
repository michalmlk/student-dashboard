import { useContext } from 'react';
import ListOfUsers from '../components/organisms/ListOfUsers/ListOfUsers';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from '../providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <ListOfUsers users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
