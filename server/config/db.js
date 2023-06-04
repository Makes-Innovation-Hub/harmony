import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let conn
    if (process.env.NODE_ENV === "development"){
      conn = await mongoose.connect(process.env.MONGO_URI_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else if (process.env.NODE_ENV === "production"){
      conn = await mongoose.connect(process.env.MONGO_URI_PROD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`${error}`);
  }
};

const closeDBConnection = () => {
  mongoose.connection.close();
};

export { connectDB, closeDBConnection };
