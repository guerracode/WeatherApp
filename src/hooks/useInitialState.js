import { useState, useEffect } from 'react';
import axios from 'axios';

const Location = 'https://www.metaweather.com/api/location/';
const Search = 'https://www.metaweather.com/api/location/search/?query=';

const useInitialState = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(async () => {
    const response = await axios(`${Location}116545`);
    setWeather(response.data);
  }, []);

  const searchLocation = async (query) => {
    const response = await axios(`${Search}${query}`);
    setSearch(response.data);
  };

  const newLocation = async (location) => {
    const response = await axios(`${Location}${location}`);
    setWeather(response.data);
  };

  const yourLocation = async () => {
    const response = await axios(`${Location}116545`);
    setWeather(response.data);
  };

  return {
    weather,
    searchLocation,
    search,
    newLocation,
    yourLocation,
  };
};

export default useInitialState;
