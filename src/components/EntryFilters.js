import React, { useContext } from 'react';
import Context from '../context/SWContext';

export default function EntryFilters() {
  const {
    setFilteredPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
    planetsData,
  } = useContext(Context);

  function handleChange({ target }) {
    setFilterByNumericValues(
      (prevState) => ({
        ...prevState,
        [target.name]: target.value }),
    );
  }

  function onFilterByNum() {
    const { column, comparison, value } = filterByNumericValues;
    if (comparison === 'maior que') {
      const filterPlanets = planetsData.filter(
        (planets) => Number(planets[column]) > Number(value),
      );
      setFilteredPlanets((filterPlanets));
    }
    if (comparison === 'menor que') {
      const filterPlanets = planetsData.filter(
        (planets) => Number(planets[column]) < Number(value),
      );
      setFilteredPlanets(filterPlanets);
    }
    if (comparison === 'igual a') {
      const filterPlanets = planetsData.filter(
        (planets) => Number(planets[column]) === Number(value),
      );
      setFilteredPlanets(filterPlanets);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onFilterByNum();
  }

  const { column, comparison, value } = filterByNumericValues;
  return (
    <form onSubmit={ handleSubmit }>
      <br />
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          onChange={ handleChange }
          name="comparison"
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ value }
          onChange={ handleChange }
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
