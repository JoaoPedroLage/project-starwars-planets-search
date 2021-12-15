import React, { useContext } from 'react';
import Context from '../context/SWContext';

export default function SearchInput() {
  const {
    allPlanets,
    filterByName,
    setFilterByName,
    setFilteredPlanets,
  } = useContext(Context);

  function handleChange({ target }) {
    setFilterByName({ name: target.value });

    const filterPlanets = allPlanets.filter(
      (planet) => planet.name.toLowerCase()
        .includes(target.value.toLowerCase()),
    );

    setFilteredPlanets(filterPlanets);

    console.log(filterPlanets);
  }

  function handleSubmit() {

  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          placeholder="Filter by name"
          name="state"
          value={ filterByName.name || '' }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}
