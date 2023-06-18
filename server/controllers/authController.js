import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Controller for generating JWT token
export const generateToken = (req, res) => {
  const { userId } = req.body;

  // Generate the JWT token with a secret
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  // Return the token to the client
  res.json({ token });
};

// Middleware function to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token with the secret
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Store the decoded token in the request object for further use
    req.userId = decoded.userId;
    next();
  });
};
