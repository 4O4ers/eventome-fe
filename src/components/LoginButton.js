import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <p className="loginClass"  onClick={() => loginWithRedirect()}>Log In</p>;
};

export default LoginButton;