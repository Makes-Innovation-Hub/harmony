import React from "react";
import doveImage from "../../assets/dove.png";
import googleLogo from "../../assets/Login/google.svg";
import facebookLogo from "../../assets/Login/Facebook_icon.svg";
import appleLogo from "../../assets/Login/apple.png";
import {
  LoginPageWrapper,
  AppIcon,
  HarmonyText,
  DescriptionText,
  StyledDove,
  StyledEllipse,
  StyledSignInButton,
  SignInLogo,
} from "./LoginPageStyles";

const LoginPage = () => {
  const handleGoogleSignInClick = () => {
    window.location.href = "http://localhost:5000/api/v1/auth/google";
  };

  const handleFacebookSignInClick = () => {
    window.location.href = "http://localhost:5000/api/v1/auth/facebook";
  };

  const handleAppleSignInClick = () => {
    window.location.href = "http://localhost:5000/api/v1/auth/apple";
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
        Translate songs between <br></br> Hebrew and Arabic
      </DescriptionText>
      <StyledSignInButton onClick={handleFacebookSignInClick}>
        <SignInLogo src={facebookLogo} alt="Facebook logo" />
        Sign in with Facebook
      </StyledSignInButton>
      <StyledSignInButton onClick={handleGoogleSignInClick}>
        <SignInLogo src={googleLogo} alt="Google logo" />
        Sign in with Google
      </StyledSignInButton>
      <StyledSignInButton onClick={handleAppleSignInClick}>
        <SignInLogo src={appleLogo} alt="Apple logo" />
        Sign in with Apple
      </StyledSignInButton>
    </LoginPageWrapper>
  );
};

export default LoginPage;
