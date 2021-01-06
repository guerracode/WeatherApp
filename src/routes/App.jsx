import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import '../styles/App.css';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.weather).length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default App;
