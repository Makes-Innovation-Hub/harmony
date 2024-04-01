import styled from "styled-components";
import doveImage from "../../assets/dove.png";
import ellipseImage from "../../assets/Ellipse3.png";

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; // Take full width of the modal
  height: 100%; // Take full height of the modal
`;

export const ImageWrapper = styled.img`
  width: 100%; // Take full width of the container
  height: auto; // Adjust height automatically
  object-fit: contain; // Ensure the image fits within the container without stretching
  max-height: 80%; // Adjust based on your preference to leave space for text
`;

export const ModalText = styled.p`
  color: #333; // Example text color
  font-size: 18px; // Example font size
  font-family: ABeeZee;
  text-align: center;
  margin-top: 20px; // Space above the text
`;

export const LoginPageWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 700px;
`;

export const AppIcon = styled.div`
  position: absolute;
  top: 15vh; // Adjusted for higher placement
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 98px;
`;

export const StyledDove = styled.div`
  position: absolute;
  width: 28px;
  height: 37px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${doveImage});
  background-size: cover;
  z-index: 1000;
`;

export const StyledEllipse = styled.div`
  background-image: url(${ellipseImage});
  position: absolute;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background-size: cover;
  background-color: #c67d0f;
  opacity: 0.19;
`;

export const HarmonyText = styled.div`
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 28px;
  line-height: 37.24px;
  color: #333333;
  margin-top: 10vh; // Adjusted spacing
`;

export const DescriptionText = styled.div`
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 17px;
  line-height: 133%;
  text-align: center;
  color: #828282;
  width: 364px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 5vh; // Adjusted smaller gap
  margin-bottom: 10vh; // Adjusted larger gap to buttons
`;

export const StyledSignInButton = styled.button`
  width: 218px; // Fixed width
  height: 42px; // Fixed height
  background-color: #ffffff;
  border: 1px solid #cccccc; // Border specification
  border-radius: 8px; // Radius
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Align items to the left
  padding-left: 16px; // Equal space from left edge to logo

  margin-top: 20px; // Maintain spacing between buttons
  white-space: nowrap; // Prevent text from wrapping

  &:hover,
  &:focus {
    outline: none;
    background-color: #f3f3f3;
  }

  font-family: "Roboto", sans-serif; // Font family
  font-weight: 400; // Weight
  font-size: 16px; // Size
  line-height: 24px; // Line height
  letter-spacing: 0.15px; // Letter spacing
`;

export const SignInLogo = styled.img`
  width: 18px; // Adjusted logo width
  height: 22px; // Adjusted logo height
  margin-right: 10px; // Space between the logo and the text
  flex-shrink: 0; // Prevent logo from shrinking
`;
