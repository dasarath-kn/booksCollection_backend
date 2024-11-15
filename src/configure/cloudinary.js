import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export const uploadImage = async (image) => {
    try {
        const upload = await cloudinary.uploader.upload(
            image, { folder: 'books', resource_type: "image" })
        return upload.secure_url

    } catch (error) {
        console.error(error);

    }
}