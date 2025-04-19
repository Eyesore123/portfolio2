// Used for creating an effect that scrolls the page to the top when the route changes. Not necessary if used in the navbar separately, also can't be used in tandem with a scroll behavior override. Not implemented in this project.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // For Safari and some other browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  
  return null;
}

export default ScrollToTop;
