import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id: Number,
    name: String,
    chpt: String,
    title: String,
    pages: String,
    sem: String,
    image: String,
    link: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;