import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  LoginPageWrapper,
  AppIcon,
  HarmonyText,
  DescriptionText,
  StyledDove,
  StyledEllipse,
} from "./LoginPageStyles";

const LoginPage = () => {
  const backendUrl = "http://localhost:5000/api/v1/auth/google";
  const navigate = useNavigate(); // Hook for redirection

  // Correctly defined function to send the token to the backend
  const sendTokenToBackend = async (token) => {
    try {
      const response = await axios.post(backendUrl, { token });
      console.log("Response from backend:", response.data);

      if (response.data.verified) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  useEffect(() => {
    const handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token from GIS: " + response.credential);
      sendTokenToBackend(response.credential); // Use the token to authenticate
    };

    window.onload = () => {
      window.google?.accounts.id.initialize({
        client_id: import.meta.env.VITE_CLIENT_ID, // Ensure this is your actual client ID
        callback: handleCredentialResponse,
      });
      window.google?.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"), // Ensure this element exists
        { theme: "outline", size: "large" }
      );
    };
  }, []);

  return (
    <LoginPageWrapper>
      <AppIcon>
        <StyledDove />
        <StyledEllipse />
      </AppIcon>
      <HarmonyText>Harmony</HarmonyText>
      <DescriptionText>
        Translate songs between Hebrew and Arabic
      </DescriptionText>
      <div id="googleSignInDiv"></div>{" "}
      {/* Google Sign-In button will be rendered here */}
    </LoginPageWrapper>
  );
};

export default LoginPage;
