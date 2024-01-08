import mongoose from "mongoose";

const commentSchema = new mongoose.Schema
(
    {
        userName:
        {
            type: String,
            required: true
        },
        text:
        {
            type: String,
            required: true
        },
        date: 
        {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

export default mongoose.model('comment', commentSchema);