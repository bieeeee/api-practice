import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {

  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
      , {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      })
    return data;
  } catch (err) {
    console.log(err);
  }
}
