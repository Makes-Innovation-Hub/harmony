import styled from "styled-components";
import doveImage from "../../assets/dove.png";
import ellipseImage from "../../assets/Ellipse3.png";

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
  background-image: url(${doveImage});
  position: absolute;
  width: 28px;
  height: 37px;
  top: 50%; // Center vertically in AppIcon
  left: 50%; // Center horizontally in AppIcon
  transform: translate(-50%, -50%); // Adjust for true centering
  background-size: cover;
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
  margin-top: 200px; // Increased spacing
`;

export const DescriptionText = styled.div`
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 17px;
  line-height: 22.61px;
  text-align: center;
  color: #828282;
  width: 364px;
  margin-top: 25px; // Increased spacing
  margin-bottom: 50px; // Added bottom spacing for separation from the button
`;

export const StyledGoogleSignInButton = styled.button`
  width: 218px;
  height: 42px;
  background-color: #4285f4; // Assuming you want to keep the Google button color
  color: white;
  border: 1px solid #1e2432; // Updated border style
  border-radius: 8px;
  // padding: 0px 136px 0px 17px; // Custom padding as specified
  cursor: pointer;
  font-size: 16px;
  opacity: 0.23; // Adjusting opacity if needed, or remove this line if full color is desired
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover,
  &:focus {
    outline: none;
    background-color: #4285f4; // Remove hover effect
  }
`;
