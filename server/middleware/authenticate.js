import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const CLIENT_ID = process.env.VITE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const authenticate = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify the token using Google's OAuth2Client
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Find the user in the database based on Google ID
    let user = await User.findOne({ googleId: payload.sub });

    if (!user) {
      // Optionally handle the case where the user is not found in the database
      return res.status(404).json({ message: "User not found" });
    }

    // Attach the user's _id and optionally other details to the req object
    req.userId = user._id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log and respond with the error if token verification fails
    console.error("Error verifying token:", error);
    res.status(403).json({ message: "Failed to authenticate token." });
  }
};

export default authenticate;
