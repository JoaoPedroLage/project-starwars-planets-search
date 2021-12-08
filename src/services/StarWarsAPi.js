// código tem como base de referência o código da última aula de Context API e React Hooks (17.3)

const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getCurrentPlanetsData = async () => {
  const response = await fetch(STAR_WARS_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrentPlanetsData;
