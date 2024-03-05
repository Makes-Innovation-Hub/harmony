import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifySessionWithBackend } from "../components/authUtils";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";
import { useTranslation } from "react-i18next";

const SecureRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isVerified = useSelector((state) => state.auth.isVerified);
  const [loading, setLoading] = useState(!isVerified); // Start loading only if not already verified

  useEffect(() => {
    // Only verify session with backend if not already verified
    if (!isVerified) {
      verifySessionWithBackend(dispatch, navigate).finally(() =>
        setLoading(false)
      );
    }
  }, [dispatch, navigate, isVerified]); // Dependency array ensures this effect runs only when isVerified changes

  if (loading) {
    return (
      <Animation
        animationGif={translatingGif}
        animationText={[t("Verifying session, please wait...")]}
      />
    );
  }

  return isVerified ? children : <Navigate to="/login" replace />;
};

export default SecureRoute;
