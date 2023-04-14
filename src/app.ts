import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/pizza_ordering");

app.use(express.json()); // Parse JSON request body
app.use(router); // Use routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
