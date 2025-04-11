const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const Db = process.env.NODE_ENV === "production" ? process.env.REMOTE_DATABASE : process.env.LOCAL_DATABASE;

  // Uncomment for debugging:
  // console.log(`Connecting to DB: ${Db?.split("@")[1] || Db}`);

  try {
    await mongoose.connect(Db, {
      socketTimeoutMS: 30000,
      retryWrites: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); 
  }
};

module.exports = connectDB; // Changed to CommonJS export