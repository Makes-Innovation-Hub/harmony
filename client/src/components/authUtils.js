import { setAuthState } from "../Redux/authSlice";

export const verifyTokenWithBackend = async (
  token,
  dispatch,
  navigate = null
) => {
  try {
    const backendUrl = `${import.meta.env.VITE_SERVER_BASE_URL}:${
      import.meta.env.VITE_SERVER_PORT
    }/api/v1/auth/google`;
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (data.verified) {
      localStorage.setItem("token", token); // Store the token in localStorage
      dispatch(setAuthState({ isVerified: true })); // Update Redux state on success
      if (navigate) navigate("/"); // Conditional navigation
    } else {
      console.error("Token verification failed.");
      dispatch(setAuthState({ isVerified: false }));
    }
  } catch (error) {
    console.error("Error sending data to backend:", error);
    dispatch(setAuthState({ isVerified: false }));
  }
};
