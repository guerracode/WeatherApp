import { useState } from 'react';

const useInitialState = () => {
  const [state, setState] = useState([]);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  return {
    addToCart,
  };
};

export default useInitialState;
