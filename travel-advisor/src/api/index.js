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
        'X-RapidAPI-Key': '930b5c48bemsh378fdf89f90727ep18039bjsnf83f545d67a2',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
