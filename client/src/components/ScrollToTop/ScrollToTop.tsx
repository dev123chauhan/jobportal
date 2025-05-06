import { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';

const ScrollToTopFromBottom = () => {
  const location: Location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollToTopFromBottom;
