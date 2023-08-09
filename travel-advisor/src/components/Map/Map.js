import './map.css';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Map({ setCoordinates, setBounds, coordinates, places }) {
  const isDesktop = useMediaQuery('(min-width: 600px');

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
        }}
      >
        {places?.map((place, i)=>(
          <div className="markerContainer" lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <Paper elevation={3} className="paper">
                  <Typography className="typography" variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img alt={place.name} className="pointer" src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} />
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
