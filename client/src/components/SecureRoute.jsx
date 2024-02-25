import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyTokenWithBackend } from "../components/authUtils.js";

const SecureRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isVerified = useSelector((state) => state.auth.isVerified);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isVerified) {
      verifyTokenWithBackend(token, dispatch);
    } else {
      setLoading(false);
    }
  }, [dispatch, isVerified]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isVerified ? children : <Navigate to="/login" replace />;
};
export default SecureRoute;
