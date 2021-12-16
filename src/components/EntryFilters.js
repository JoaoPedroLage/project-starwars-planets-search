import React, { useContext, useState } from 'react';
import Context from '../context/SWContext';

export default function EntryFilters() {
  const arrayColums = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const {
    setFilteredPlanets,
    setFilterByNumericValues,
    filterByNumericValues,
    planetsData,
  } = useContext(Context);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  function handleChange({ target }) {
    if (target.name === 'column') setColumn(target.value);
    if (target.name === 'comparison') setComparison(target.value);
    if (target.name === 'value') setValue(target.value);
  }

  function onFilterByNum() {
    setFilterByNumericValues([{ column, comparison, value }]);

    if (comparison === 'maior que') {
      const filterPlanets = planetsData.filter(
        (planets) => Number(planets[column]) > Number(value),
      );
      setFilteredPlanets(filterPlanets);
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

  return (
    <form onSubmit={ handleSubmit }>
      <br />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        {arrayColums.filter(
          (columns) => (
            columns !== filterByNumericValues[filterByNumericValues.length - 1].column
          ),
        ).map((option, index) => (
          <option key={ index }>
            {option}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
}
