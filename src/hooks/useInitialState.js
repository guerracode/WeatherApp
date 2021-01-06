import { useState, useEffect } from 'react';
// import intialState from '';
import axios from 'axios';

const Location = 'https://www.metaweather.com/api/location/';
// const Search = 'https://www.metaweather.com/api/location/search/?query=';

const useInitialState = () => {
  const [weather, setWeather] = useState([]);

  useEffect(async () => {
    const response = await axios(`${Location}116545`);
    setWeather(response.data);
  }, []);

  // const addToCart = (payload) => {
  //   setState({
  //     ...state,
  //     cart: [...state.cart, payload],
  //   });
  // };

  return {
    weather,
  };
};

export default useInitialState;
