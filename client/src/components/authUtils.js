import { setAuthState } from "../Redux/authSlice"; // Adjust the import path as necessary
import { serverApiUrl } from "../constants/urls";

export const verifySessionWithBackend = async (dispatch, navigate = null) => {
  try {
    const backendUrl = `${serverApiUrl}/auth/verify-session`;

    const response = await fetch(backendUrl, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok && data.isAuthenticated && data.user) {
      localStorage.setItem("userId", data.user.id);
      dispatch(setAuthState({ isVerified: true, user: data.user }));
    } else {
      console.error("Session verification failed or user data is missing.");
      dispatch(setAuthState({ isVerified: false }));
      localStorage.removeItem("userId");
      if (navigate) navigate("/login");
    }
  } catch (error) {
    console.error("Error verifying session with backend:", error);
    dispatch(setAuthState({ isVerified: false }));
    localStorage.removeItem("userId");
    if (navigate) navigate("/login");
  }
};
