/* eslint-disable max-len */
import { useState, useEffect } from 'react';

const useMediaQuery = (queryString) => {
  const [queryMatch, setQueryMatch] = useState(false);

  useEffect(() => {
    const windowSize = window.matchMedia(queryString);

    if (windowSize.matches !== queryMatch) {
      setQueryMatch(windowSize.matches);
    }

    const event = () => {
      setQueryMatch(windowSize.matches);
    };

    windowSize.addEventListener('change', event);

    return () => windowSize.removeEventListener('change', event);
  }, [queryMatch, queryString]);

  return queryMatch;
};

export default useMediaQuery;
