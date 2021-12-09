// código tem como base de referência o código da última aula de Context API e React Hooks (17.3)

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './SWContext';
import getCurrentPlanetsData from '../services/StarWarsAPi';

export default function SWProvider({ children }) {
  const [state, setState] = useState({
    data: [],
  });

  const requestStarWarsAPI = async () => {
    const response = await getCurrentPlanetsData();
    const { results } = response;

    setState((prevState) => ({
      ...prevState,
      data: results,
    }));
  };

  return (
    <Context.Provider
      value={ { ...state, requestStarWarsAPI } }
    >
      { children }
    </Context.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
