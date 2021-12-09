// import React from 'react';
import React, { useContext } from 'react';
import Context from '../context/SWContext';
import MountAPI from '../hooks/MountAPI';
// import response from '../testData';

export default function Table() {
  const {
    data,
    requestStarWarsAPI,
  } = useContext(Context);

  MountAPI(requestStarWarsAPI);

  return (
    <table>
      <thead>
        <tr>
          <th role="columnheader">Name</th>
          <th role="columnheader">Rotation Period</th>
          <th role="columnheader">Orbital Period</th>
          <th role="columnheader">Diameter</th>
          <th role="columnheader">Climate</th>
          <th role="columnheader">Gravity</th>
          <th role="columnheader">Terrain</th>
          <th role="columnheader">Surface Water</th>
          <th role="columnheader">Population</th>
          <th role="columnheader">Films</th>
          <th role="columnheader">Created</th>
          <th role="columnheader">Edited</th>
          <th role="columnheader">URL</th>
        </tr>
      </thead>
      <tbody>
        {console.log(data)}
        {data.map((planet, index) => (
        // {response.results.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>))}
      </tbody>
    </table>
  );
}
