import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/db.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();
connectDb();
const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
