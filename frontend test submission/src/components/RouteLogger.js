import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logger from '../utils/logger';

export default function RouteLogger() {
  const location = useLocation();

  useEffect(() => {
    logger("frontend", "info", "routes", `ROUTE_CHANGE: ${location.pathname}`);
  }, [location]);

  return null;
}
