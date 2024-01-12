import mongoose from "mongoose";

const commentSchema = new mongoose.Schema
(
    {
        text:
        {
            type: String,
            required: true
        },
        date: 
        {
            type: Date,
            default: Date.now
        },
        relatedPost:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

export default mongoose.model('comment', commentSchema);