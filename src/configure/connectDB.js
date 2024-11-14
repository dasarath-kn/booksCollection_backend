import mongoose from "mongoose";
const dbUrl = "mongodb+srv://books:yfjt2ElCvUia3KeW@shozey.wc2yh6b.mongodb.net/?retryWrites=true&w=majority&appName=Shozey"
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });
    if (connect) {
      console.log(`Database Connected`);

    }
  } catch (error) {
    console.error(error.message);
  }
}
export default connectDB