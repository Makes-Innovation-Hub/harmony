// dataDeletionRoutes.js
import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";
import logger from "../logger.js";

dotenv.config();

const router = express.Router();
const APP_SECRET = process.env.APP_SECRET; // Make sure to add your app secret to your .env file

// Helper function to decode base64 strings
const base64UrlDecode = (input) => {
  let base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    Buffer.from(base64, "base64")
      .toString()
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

// Function to verify and decode the signed request from Facebook
const verifySignedRequest = (signedRequest) => {
  let [encodedSig, payload] = signedRequest.split(".");
  let sig = Buffer.from(encodedSig, "base64");
  let data = base64UrlDecode(payload);

  // Verify the signature
  let expectedSig = crypto
    .createHmac("sha256", APP_SECRET)
    .update(payload)
    .digest("base64");
  if (sig.toString() !== expectedSig) {
    logger.error("Invalid signature.");
    return null;
  }
  return data;
};

// Data Deletion Request Route
router.post("/", (req, res) => {
  const signedRequest = req.body.signed_request;
  const data = verifySignedRequest(signedRequest);
  if (!data) {
    return res.status(422).json({ error: "Invalid request." });
  }

  const userId = data.user_id;
  // Implement your data deletion logic here based on userId

  // After deletion, provide a URL for the user to check the status of their deletion request and a unique confirmation code
  const statusUrl = `YourStatusURLHere`; // Provide the actual status URL
  const confirmationCode = "YourUniqueConfirmationCodeHere"; // Generate a unique confirmation code

  res.json({
    url: statusUrl,
    confirmation_code: confirmationCode,
  });
});

export default router;
