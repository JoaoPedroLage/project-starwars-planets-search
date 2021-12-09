import { useEffect } from 'react';

export default function MountAPI(StarWarsAPI) {
  useEffect(() => {
    StarWarsAPI();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
}
