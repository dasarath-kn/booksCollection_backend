import mongoose, { Schema } from "mongoose";
const bookSchema = new Schema({
    bookname: {
        type: String,
        required: true
    },
    authorname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publicationyear: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    coverimgurl: {
        type: String,

    },
    createdat: {
        type: Date,
        default: Date.now()
    }

})
const bookModel = mongoose.model('book', bookSchema)
export default bookModel