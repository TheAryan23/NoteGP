import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js'

import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000 
const URI = process.env.MongoDBURI;
// connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

//defining routes
app.use("/book",bookRoute)
app.use(express.json())
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });