import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB(process.env.MONGO_URI);
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`🚀 API ready at http://localhost:${PORT}`);
  });
}

start();
