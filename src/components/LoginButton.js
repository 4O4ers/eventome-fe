import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <p style={{color: 'white', cursor: 'pointer', textAlign: 'center', height: '100%', margin: 'auto 0', display: 'flex', alignItems: 'center'}} onClick={() => loginWithRedirect()}>Log In</p>;
};

export default LoginButton;