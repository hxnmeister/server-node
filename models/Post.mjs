import mongoose from "mongoose";

const postSchema = new mongoose.Schema
(
    {
        title: 
        {
            type: String,
            required: true,
        },
        content:
        {
            type: String,
            required: true,
        },
        rate: Number,
    }
);

export default mongoose.model('post', postSchema);