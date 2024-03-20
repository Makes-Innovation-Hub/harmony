import React from "react";

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
import { serverApiUrl } from "../../constants/urls";
import Image from "../../components/Image/Image";

const LoginPage = () => {
  const fullServerUrl = serverApiUrl;

  const handleGoogleSignInClick = () => {
    window.location.href = `${fullServerUrl}/auth/google`;
  };

  const handleFacebookSignInClick = () => {
    window.location.href = `${fullServerUrl}/auth/facebook`;
  };

  return (
    <LoginPageWrapper>
      <AppIcon>
        <StyledDove>
          <Image name={"dove"} alt={"dove"} />
        </StyledDove>
        <StyledEllipse />
      </AppIcon>
      <HarmonyText>Harmony</HarmonyText>
      <DescriptionText>
        <p>Translate songs between</p>
        <p>Hebrew and Arabic</p>
      </DescriptionText>
      <StyledSignInButton onClick={handleFacebookSignInClick}>
        <Image
          name={"facebookLogo"}
          alt={"Facebook logo"}
          styles={SignInLogo}
        />
        Sign in with Facebook
      </StyledSignInButton>
      <StyledSignInButton onClick={handleGoogleSignInClick}>
        <Image name={"googleLogo"} alt={"Google logo"} styles={SignInLogo} />
        Sign in with Google
      </StyledSignInButton>
    </LoginPageWrapper>
  );
};

export default LoginPage;
