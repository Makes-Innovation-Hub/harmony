import React, { useState } from "react";
import {
  LoginPageWrapper,
  AppIcon,
  HarmonyText,
  DescriptionText,
  StyledDove,
  StyledEllipse,
  StyledSignInButton,
  SignInLogo,
  ImageWrapper,
  ModalContentContainer,
  ModalText,
} from "./LoginPageStyles";

import { serverApiUrl } from "../../constants/urls";
import Image from "../../components/Image/Image";
import GenericModal from "../../components/GenericModal/GenericModal";

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullServerUrl = serverApiUrl;

  const handleGoogleSignInClick = () => {
    window.location.href = `${fullServerUrl}/auth/google`;
  };

  const handleFacebookSignInClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LoginPageWrapper>
      <AppIcon>
        <StyledDove>
          <Image name={"dove"} alt={"Dove"} />
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
      <GenericModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <ModalContentContainer>
          <Image
            name="underconst" // Use the key from the images object
            alt="Under Construction"
            styles={ImageWrapper}
          />
          <ModalText>
            Facebook login is under construction, use Google for now.
          </ModalText>
        </ModalContentContainer>
      </GenericModal>
    </LoginPageWrapper>
  );
};

export default LoginPage;
