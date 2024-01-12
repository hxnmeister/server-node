import Comment from "../models/Comment.mjs";

const all = async (req, res) =>
{
    res.json(await Comment.find().exec());
};

const getById = async (req, res) =>
{
    try 
    {
        res.json(await Comment.findById(req.params.id).exec());
    } 
    catch 
    {
        res.status(404).json
        (
            {
                result: 'error',
                message: 'invalid comment id!'
            }
        );
    }
};

const add = async (req, res) =>
{
    try 
    {
        const comment = new Comment(req.body);
        await comment.save();

        res.json(comment);
    } 
    catch (error) 
    {
        res.status(400).json(error);
    }
};

const remove = async (req, res) =>
{
    try 
    {
        await Comment.findByIdAndDelete(req.body.id).exec();

        res.status(200).json
        (
            {
                status: "success",
                message: "comment removed!"
            }
        );
    } 
    catch (error) 
    {
        res.status(400).json
        (
            {
                status: "error",
                message: "such comment does not exists!"
            }
        );
    }
};

export default { all, getById, add, remove };