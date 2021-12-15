import React, { useContext } from 'react';
import Context from '../context/SWContext';

export default function EntryFilters() {
  const {
    filteredPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(Context);

  function handleSubmit() {

  }

  return (
    <form onSubmit={ handleSubmit }>
      <br />
      <label htmlFor="column-filter">
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
}
