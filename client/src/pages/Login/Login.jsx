import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyTokenWithBackend } from "../../components/authUtils"; // Ensure this path is correct
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      callback: (response) => {
        // Use the utility function for token verification
        verifyTokenWithBackend(response.credential, dispatch, () =>
          navigate("/")
        );
      },
    });
  }, [dispatch, navigate]);

  const handleSignInClick = () => {
    window.google.accounts.id.prompt();
  };

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
        Translate songs between Hebrew and Arabic
      </DescriptionText>
      <StyledGoogleSignInButton onClick={handleSignInClick}>
        <GoogleLogo src={googleLogo} alt="Google logo" />
        Sign in with Google
      </StyledGoogleSignInButton>
    </LoginPageWrapper>
  );
};

export default LoginPage;
