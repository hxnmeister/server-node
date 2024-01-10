import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema
(
    {
        name: 
        {
            type: String,
            required: true,
        },
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        password: 
        {
            type: String,
            required: true,
            min: 6
        },
        createdAt:
        {
            type: Date,
            default: Date.now
        }
    }
);

userSchema.pre('save', async function ()
{
    this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model('user', userSchema);