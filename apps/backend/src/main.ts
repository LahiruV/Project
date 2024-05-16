import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url: string | undefined = process.env.ATLAS_URI;
if (!url) {
  console.error("MongoDB connection URI not provided");
  process.exit(1);
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connection successful");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
  process.exit(1);
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
