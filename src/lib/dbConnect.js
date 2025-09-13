import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please add your MONGODB_URI to .env.local");
}


let isConnected = false;

async function dbConnect() {

  if (isConnected || mongoose.connection.readyState === 1) {
    console.log("⚡ Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;

    if (isConnected) {
      console.log("✅ MongoDB Connected");
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
}

export default dbConnect;
