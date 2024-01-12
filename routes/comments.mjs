import express from 'express';
import CommentController from '../controllers/CommentController.mjs';

const router = express.Router();

router.get('/comments', CommentController.all);
router.get('/comments/:id', CommentController.getById);

router.post('/comments', CommentController.add);

router.delete('/comments/:id', CommentController.remove);

export default router;