import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_DEVELOPMENT, {
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
