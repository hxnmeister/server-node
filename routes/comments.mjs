import express from 'express';
import CommentController from '../controllers/CommentController.mjs';

const router = express.Router();

router.get('/comments', CommentController.all);

router.get('/comments/:id', CommentController.getById);
 
export default router;