// AuthErrorHandler.js
import { useEffect, useState } from 'react';

export const useAuthError = () => {
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const description = params.get("error_description");

    if (error && description) {
      setAuthError({ error, description });

      // Clear error from URL to avoid repeated messages
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return authError;
};
