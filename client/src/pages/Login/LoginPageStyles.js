import styled from "styled-components";
import doveImage from "../../assets/dove.png";
import ellipseImage from "../../assets/Ellipse3.png";
import googleLogo from "../../assets/Login/google.SVG";

export const StyledEllipse = styled.div`
  background-image: url(${ellipseImage});
  position: absolute;
  width: 107px; // Ensuring width and height are equal for a circle
  height: 107px; // Adjusted to match width for circular shape
  border-radius: 50%; // Make it circular
  background-size: cover;
  background-color: #c67d0f;
  opacity: 0.19;
`;

export const StyledDove = styled.div`
  /* background-image: url(${doveImage}); */
  position: absolute;
  width: 28px;
  height: 37px;
  top: 50%; // Center vertically in AppIcon
  left: 50%; // Center horizontally in AppIcon
  transform: translate(-50%, -50%); // Adjust for true centering
  background-size: cover;
  z-index: 1000;
`;

export const AppIcon = styled.div`
  position: absolute;
  top: 200px; // Position it 200px from the top
  left: 50%; // Center it horizontally
  transform: translateX(-50%); // Adjust horizontal centering
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px; // Adjust based on your needs
  height: 98px; // Adjust based on your needs
`;

export const LoginPageWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 107px;
  height: 98px;
  margin-top: 147px;
`;

export const HarmonyText = styled.div`
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 28px;
  line-height: 37.24px;
  color: #333333;
  margin-top: 20px; // Increased spacing
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
  margin-top: 25px; // Increased spacing
  margin-bottom: 50px; // Added bottom spacing for separation from the button
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledGoogleSignInButton = styled.button`
  width: 218px;
  height: 42px;

  background-color: white;
  border: 1px solid #1e24323b;
  border-radius: 8px;
  cursor: pointer;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100px;

  &:hover,
  &:focus {
    outline: none;
    /* background-color: #357ae8;  */
  }
`;

export const GoogleLogo = styled.img.attrs({
  src: googleLogo,
})`
  height: 18px;
  margin-right: 14px;
`;
