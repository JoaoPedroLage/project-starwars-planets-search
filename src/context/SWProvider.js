// código tem como base de referência o código da última aula de Context API e React Hooks (17.3)

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './SWContext';
import getCurrentPlanetsData from '../services/StarWarsAPi';

export default function SWProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({});

  const requestStarWarsAPI = async () => {
    const response = await getCurrentPlanetsData();
    const { results } = response;

    setAllPlanets(results);
  };

  const contextValue = {
    allPlanets,
    filteredPlanets,
    setFilteredPlanets,
    filterByName,
    setFilterByName,
    requestStarWarsAPI,
  };

  return (
    <Context.Provider
      value={ contextValue }
    >
      { children }
    </Context.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
