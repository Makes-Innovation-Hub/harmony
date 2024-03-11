import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import AppleStrategy from "passport-apple";
import User from "../models/User.js";
import "dotenv/config";
import { serverApiUrl } from "../utils/urls.js";

// Helper function to handle user creation or retrieval
async function handleUser({ id, displayName, emails, provider, photos }, done) {
  // Default to a placeholder email if none is provided
  const email =
    emails && emails.length > 0 ? emails[0].value : `hidden_${id}@example.com`;

  // Extract the avatar URL. For Google and Facebook, it's available in the photos array.
  // Note: Apple does not provide an avatar URL in its OAuth response, so it's handled accordingly.
  let avatarUrl = "";
  if (provider === "google" || provider === "facebook") {
    avatarUrl = photos && photos.length > 0 ? photos[0].value : "";
  }
  console.log(`Avatar URL for ${provider}:`, avatarUrl);

  try {
    const query = { [`${provider}Id`]: id };
    let user = await User.findOne(query);

    if (!user) {
      // Create a new user if one doesn't exist
      const newUser = {
        name: displayName || "OAuth User",
        email,
        avatar: avatarUrl || "OAuth User",
        [`${provider}Id`]: id,
        [`is${
          provider.charAt(0).toUpperCase() + provider.slice(1)
        }Account`]: true,
      };

      try {
        user = await User.create(newUser);
      } catch (error) {
        if (error.code === 11000) {
          // Handle duplicate key error for email
          console.log(`A user with the email ${email} already exists.`);
          user = await User.findOne({ email: email });
          if (!user) {
            return done(error);
          }
        } else {
          return done(error);
        }
      }
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
}

// Construct the full server URL dynamically
const fullServerUrl = serverApiUrl;

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${fullServerUrl}/api/v1/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) =>
      handleUser({ ...profile, provider: "google" }, done)
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${fullServerUrl}/api/v1/auth/facebook/callback`,
      profileFields: ["id", "displayName", "emails", "photos"], // Include "photos" here
    },
    (accessToken, refreshToken, profile, done) =>
      handleUser({ ...profile, provider: "facebook" }, done)
  ) // Removed the semicolon here
);

// Apple Strategy
passport.use(
  new AppleStrategy(
    {
      clientID: process.env.APPLE_CLIENT_ID,
      teamID: process.env.APPLE_TEAM_ID,
      keyID: process.env.APPLE_KEY_ID,
      privateKeyLocation: process.env.APPLE_PRIVATE_KEY_PATH,
      callbackURL: `${fullServerUrl}/api/v1/auth/apple/callback`,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, decodedIdToken, profile, done) =>
      handleUser({ ...profile, provider: "apple" }, done)
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
