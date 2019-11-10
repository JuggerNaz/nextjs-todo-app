import App from "./App/Home";

import { injectGlobal } from './styled/global.style';

import { Auth0Provider } from "../src/react-auth0-spa";
import config from "../src/auth_config.json";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const Index = () => (
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={typeof window !== 'undefined' ? window.location.origin : 'localhost:3000'}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>
)
  
export default Index