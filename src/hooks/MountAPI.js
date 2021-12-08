import { useEffect } from 'react';

function MountAPI(StarWarsAPI, interval) {
  useEffect(() => {
    StarWarsAPI();

    const intervalId = setInterval(StarWarsAPI, interval);
    return () => clearInterval(intervalId);
  },
  [StarWarsAPI, interval]);
}

export default MountAPI;
