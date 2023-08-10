import './header.css';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState();
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    console.log(autocomplete.getPlace());
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="/" className='logo'>Travel Advisor</a>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
