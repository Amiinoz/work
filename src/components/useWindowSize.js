/* eslint-disable prefer-rest-params */
import { useState, useEffect } from 'react';

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        // eslint-disable-next-line no-invalid-this
        // eslint-disable-next-line prefer-rest-params
        // eslint-disable-next-line no-invalid-this
        fn.apply(this, arguments);
      }, ms);
    };
  }

  // eslint-disable-next-line no-unused-vars
  const debounceHandleResize = debounce(function handleResize() {
    getSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
