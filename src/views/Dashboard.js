import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ListOfUsers from '../components/organisms/ListOfUsers/ListOfUsers';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.matchingStudents));
  }, [id, groups]);
  useEffect(() => {
    axios.get('/groups').then(({ data }) => setGroups(data.groups));
  }, []);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>{group}</Link>
        ))}
      </nav>
      <ListOfUsers users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
