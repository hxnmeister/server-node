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
    try 
    {
        const post = new Post(req.body);
        await post.save();

        res.json(post);
    } 
    catch (error) 
    {
        res.status(400).json(error);
    }
};

const update = async (req, res) =>
{
    try 
    {
        await Post.findByIdAndUpdate(req.params.id, req.body);
        res.json
        (
            {
                status: "success",
                message: "post updated!"
            }
        )
    } 
    catch
    {
        res.status(400).json
        (
            {
                status: "error",
                message: "post not found!"
            }
        );
    }
};

const remove = async (req, res) =>
{
    try 
    {
        await Post.findByIdAndDelete(req.params.id);
        res.json
        (
            {
                status: "success",
                message: "post deleted!"
            }
        )
    } 
    catch
    {
        res.status(400).json
        (
            {
                status: "error",
                message: "post not found!"
            }
        );
    }
};

export default { all, getById, add, update, remove };