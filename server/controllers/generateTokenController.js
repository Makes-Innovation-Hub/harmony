import jwt from "jsonwebtoken";

// Endpoint to generate JWT token
const generateToken = (req, res) => {
  const { userId } = req.body;

  // Generate the JWT token with a secret
  const token = jwt.sign({ userId }, config.tokenSecret, { expiresIn: "1h" });

  // Return the token to the client
  res.json({ token });
};

export { generateToken };
