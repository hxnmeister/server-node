import mongoose from "mongoose";

mongoose.connect('mongodb+srv://valerastronsky:pass123@cluster0.mn5fccv.mongodb.net/?retryWrites=true&w=majority');

export default mongoose.connection;