import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import AppleStrategy from "passport-apple";
import User from "../models/User.js";
import "dotenv/config";

// Helper function to handle user creation or retrieval
async function handleUser({ id, displayName, emails, provider }, done) {
  const email =
    emails && emails[0].value ? emails[0].value : `hidden_${id}@example.com`;
  try {
    const query = {};
    query[`${provider}Id`] = id;
    let user = await User.findOne(query);

    if (!user) {
      const newUser = {
        name: displayName || "OAuth User",
        email,
        [`${provider}Id`]: id,
        [`is${
          provider.charAt(0).toUpperCase() + provider.slice(1)
        }Account`]: true,
      };
      try {
        user = await User.create(newUser);
      } catch (error) {
        if (error.code === 11000) {
          // If there's a duplicate key error, specifically for the email, handle it
          console.log(`A user with the email ${email} already exists.`);
          // Attempt to retrieve the existing user by email
          user = await User.findOne({ email: email });
          if (!user) {
            // If for some reason the user isn't found (which should not happen in this case), pass the error to done
            return done(error);
          }
        } else {
          // If it's another type of error, pass it to done
          return done(error);
        }
      }
    }

    done(null, user); // User is either found or successfully created
  } catch (error) {
    done(error);
  }
}

const serverBaseUrl = process.env.SERVER_BASE_URL || "http://localhost";
const serverPort = process.env.SERVER_PORT || 5000;

// Construct the full server URL dynamically
const fullServerUrl = `${serverBaseUrl}:${serverPort}`;

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
      profileFields: ["id", "displayName", "emails"],
    },
    (accessToken, refreshToken, profile, done) =>
      handleUser({ ...profile, provider: "facebook" }, done)
  )
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
