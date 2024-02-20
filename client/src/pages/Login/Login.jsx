import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import doveImage from "../../assets/dove.png";

import {
  LoginPageWrapper,
  AppIcon,
  HarmonyText,
  DescriptionText,
  StyledDove,
  StyledEllipse,
  StyledGoogleSignInButton,
  GoogleLogo,
} from "./LoginPageStyles";
import googleLogo from "../../assets/Login/google.svg";

const LoginPage = () => {
  const backendUrl = `${import.meta.env.VITE_SERVER_BASE_URL}:${
    import.meta.env.VITE_SERVER_PORT
  }/api/v1/auth/google`;
  const navigate = useNavigate(); // Hook for redirection

  // Function to send the token to the backend
  const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (data.verified) {
        navigate("/"); // Navigate to the homepage upon successful verification
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  // Function to handle the sign-in button click
  const handleSignInClick = () => {
    window.google.accounts.id.prompt(); // Triggers the Google Sign-In flow
  };

  useEffect(() => {
    const handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token from GIS: " + response.credential);
      sendTokenToBackend(response.credential); // Use the token to authenticate
    };

    window.google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID, // Ensure this is your actual client ID
      callback: handleCredentialResponse,
    });
  }, []);

  return (
    <LoginPageWrapper>
      <AppIcon>
        <StyledDove>
          <img src={doveImage} alt="Dove" />
        </StyledDove>
        <StyledEllipse />
      </AppIcon>
      <HarmonyText>Harmony</HarmonyText>
      <DescriptionText>
        Translate songs between <br></br> Hebrew and Arabic
      </DescriptionText>
      <StyledGoogleSignInButton onClick={handleSignInClick}>
        <GoogleLogo src={googleLogo} alt="Google logo" />
        Sign in with Google
      </StyledGoogleSignInButton>
      {/* Other components */}
    </LoginPageWrapper>
  );
};

export default LoginPage;
