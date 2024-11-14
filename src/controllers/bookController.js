import { uploadImage } from "../configure/cloudinary.js";
import bookModel from "../models/bookModel.js";
import fs from 'fs'

export const addBooks = async (req, res) => {
    try {
        let imageurl = await uploadImage(req.file.path)
        const { bookname, authorname, description, publicationyear, pages, language, publisher } = req.body
        const data = { bookname, authorname, description, publicationyear, pages, language, publisher, coverimgurl: imageurl }
        const bookData = new bookModel(data)
        let saved = await bookData.save()
        if (saved) {
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error("Error removing the file", err);
                } else {
                    console.log("Local file removed successfully");
                }
            });

            res.status(200).json({ message: "Book saved successfully" })

        } else {
            res.status(500).json({ message: "Failed to save the book" });

        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
export const bookDetails = async (req, res) => {
    try {
            const bookData = await bookModel.find().sort({createdat:-1});
        if (bookData && bookData.length > 0) {
            res.status(200).json({ success: true, message: "Book details sent", bookData });
        } else {
            res.status(404).json({ success: false, message: "No books found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { bookid } = req.query;
        const deleteBookdata = await bookModel.deleteOne({ _id: bookid });

        if (deleteBookdata.deletedCount > 0) {
            res.status(200).json({ success: true, message: "Book deleted successfully" });
        } else {
            res.status(404).json({ success: false, message: "Book not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
