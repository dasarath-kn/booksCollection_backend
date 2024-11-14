import { Router } from "express";
import { addBooks, bookDetails, deleteBook } from "../controllers/bookController.js";
import upload from "../configure/multer.js";
const bookRoute = Router()

bookRoute.post("/addbook", upload.single("image"), (req, res) => addBooks(req, res))
bookRoute.get("/books", (req, res) => bookDetails(req, res))
bookRoute.delete("/deletebook", (req, res) => deleteBook(req, res))


export default bookRoute