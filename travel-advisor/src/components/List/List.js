import "./list.css";
import { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, FormControl, MenuItem, Select } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

function List({ places }) {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  return (
    <div className="listContainer">
      <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className="listForm" variant="standard">
        <InputLabel id="type">Type</InputLabel>
        <Select value={type} id="type" onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="listForm" variant="standard">
        <InputLabel id="rating">Rating</InputLabel>
        <Select value={rating} id="rating" onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className="list">
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default List
