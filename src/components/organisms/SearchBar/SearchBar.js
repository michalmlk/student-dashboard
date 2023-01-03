import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from '../../atoms/Input/Input.styles';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>Teacher</p>
      </StatusInfo>
      <Input type="text" placeholder="Search" />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
