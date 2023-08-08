import './header.css';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="/" className='logo'>Travel Advisor</a>
        <Autocomplete>
          <div className='searchContainer'>
            <SearchIcon />
            <input placeholder='Search...' />
          </div>
        </Autocomplete>
      </div>
    </div>
  )
}

export default Header
