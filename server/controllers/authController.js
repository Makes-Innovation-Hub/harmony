import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const CLIENT_ID = process.env.VITE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

export const verifyToken = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Attempt to find the user by their Google ID
    let user = await User.findOne({ googleId: payload.sub });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = await User.create({
        name: payload.name,
        email: payload.email,
        googleId: payload.sub, // Assuming the Google ID is in the 'sub' claim
      });
    }

    // Respond with the user's name, email, and verification status
    res.json({
      verified: true,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error(
      "Error verifying token or interacting with the database:",
      error
    );
    res.status(401).json({ verified: false, error: error.toString() });
  }
};
