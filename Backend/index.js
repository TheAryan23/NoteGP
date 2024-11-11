import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js'

import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

const apiUrl = process.env.REACT_APP_API_URL;
 
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});