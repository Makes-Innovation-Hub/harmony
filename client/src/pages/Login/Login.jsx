import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import doveImage from "../../assets/dove.png";
import googleLogo from "../../assets/Login/google.svg";
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

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for redirection

  // Function to send the token to the backend and store it in local storage if verified
  const sendTokenToBackend = async (token) => {
    try {
      // Assuming your backend verifies the token and returns a custom token or user data
      const backendUrl = `${import.meta.env.VITE_SERVER_BASE_URL}:${
        import.meta.env.VITE_SERVER_PORT
      }/api/v1/auth/google`;
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (data.verified) {
        // Store the Google token or a custom token provided by your backend in local storage
        localStorage.setItem("token", token); // Store the Google token; adjust if your backend returns a different token
        navigate("/"); // Navigate to the homepage upon successful verification
      } else {
        // Handle verification failure (optional)
        consosle.error("Token verification failed.");
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
    </LoginPageWrapper>
  );
};

export default LoginPage;
