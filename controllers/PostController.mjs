import Post from '../models/Post.mjs';

const all = async (req, res) => //get all posts
{
    res.json(await Post.find({}).exec());
};

const getById = async (req, res) =>
{
    try 
    {
        res.json(await Post.findById(req.params.id).exec());
    } 
    catch
    {
        res.status(404).json
        (
            { 
                result: 'error',
                message: 'Post not found!',
            }
        );
    }
};

const add = async (req, res) =>
{
    
};

const update = (req, res) =>
{

};

const remove = (req, res) =>
{

};

export default { all, getById, add, update, remove };