// código tem como base de referência o código da última aula de Context API e React Hooks (17.3)

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './SWContext';
import getCurrentPlanetsData from '../services/StarWarsAPi';

export default function SWProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const planetsData = filteredPlanets.length === 0 ? allPlanets : filteredPlanets;

  const [filterByName, setFilterByName] = useState({});
  const [filterByNumericValues, setFilterByNumericValues] = useState([{}]);

  const requestStarWarsAPI = async () => {
    const response = await getCurrentPlanetsData();
    const { results } = response;

    setAllPlanets(results);
  };

  const contextValue = {
    planetsData,
    allPlanets,
    filteredPlanets,
    setFilteredPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
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
