import { setAuthState } from "../Redux/authSlice"; // Adjust the import path as necessary

export const verifySessionWithBackend = async (dispatch, navigate = null) => {
  try {
    const backendUrl = `${import.meta.env.VITE_SERVER_BASE_URL}:${
      import.meta.env.VITE_SERVER_PORT
    }/api/v1/auth/verify-session`;

    const response = await fetch(backendUrl, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok && data.isAuthenticated && data.user) {
      localStorage.setItem("userId", data.user.id);
      dispatch(setAuthState({ isVerified: true, user: data.user }));
      if (navigate) navigate("/");
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
