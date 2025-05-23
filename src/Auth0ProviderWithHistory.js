import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import authConfig from "./auth_config.json";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  
   const domain  = authConfig.domain;
   const clientId  = authConfig.clientId;

   return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      useRefreshTokens={window.location.hostname !== 'localhost'}
      cacheLocation={window.location.hostname === 'localhost' ? 'memory' : 'memory'}
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: 'openid profile email',  // minimal scopes
      }}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
