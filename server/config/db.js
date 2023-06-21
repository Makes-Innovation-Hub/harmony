import mongoose from "mongoose";

const connectDB = async () => {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "development"
  ) {
    throw new Error("Invalid NODE_ENV specified");
  }
  try {
    const mongoURI =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`${error}`);
  }
};

const closeDBConnection = () => {
  mongoose.connection.close();
};

export { connectDB, closeDBConnection };
