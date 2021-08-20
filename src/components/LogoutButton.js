import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <p style={{color: 'white', cursor: 'pointer', textAlign: 'center', height: '100%', margin: 'auto 0', display: 'flex', alignItems: 'center'}} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </p>
  );
};

export default LogoutButton;