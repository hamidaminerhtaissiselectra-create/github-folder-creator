import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Component that normalizes URLs by removing trailing slashes
 * This prevents duplicate content issues for SEO
 */
export function TrailingSlashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Skip the root path
    if (location.pathname === "/") return;

    // Remove trailing slash if present
    if (location.pathname.endsWith("/")) {
      const newPath = location.pathname.slice(0, -1);
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
