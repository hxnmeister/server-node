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

export default { all, getById };