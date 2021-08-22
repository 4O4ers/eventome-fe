import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'dotenv';

ReactDOM.render(
  <Auth0Provider
    domain='dev-q2sq7h2c.us.auth0.com'
    clientId="kSkSY1mEh6xPFSA94sb9ORbDNUDtpRbi"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
