import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = 4005;
const URI = "mongodb://localhost:27017/bookstore";

//Mongodb Connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//Defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
