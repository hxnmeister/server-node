import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) =>
{
    const user = await User.findOne({email: req.body.email});

    if(user)
    {
        return res.status(400).json
        (
            {
                status: "error",
                message: "user already exists!"
            }
        );
    }

    try 
    {
        const newUser = new User(req.body);
        await newUser.save();

        res.json(newUser);
    } 
    catch (error) 
    {
        res.status(400).json(error);
    }
};

const login = async (req, res) =>
{
    const user = await User.findOne({email: req.body.email});

    if(!user)
    {
        return res.status(400).json
        (
            {
                status: "error",
                message: "user already exists!"
            }
        );
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if(!match)
    {
        return res.status(404).json
        (
            {
                status: "error",
                message: "invalid password!"
            }
        );
    }

    const token = jwt.sign({ userId: user._id }, 'random', { expiresIn: '24h' });

    res.json
    (
        {
            status: "login success!",
            token,
            user
        }
    )
};

const getAuthUser = async (req, res) =>
{
    const { userId } = req.user;
    const user = await User.findById(userId);

    return user ? res.json({ email: user.email, name: user.name }) 
    : res.status(404).json({ status: "error", message: "user not found!" });
};

export default { register, login, getAuthUser };