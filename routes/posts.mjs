import express from 'express';
import PostController from '../controllers/PostController.mjs';

const router = express.Router();

router.get('/posts', PostController.all);
router.post('/posts', PostController.add);

router.get('/posts/:id', PostController.getById);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.remove);

export default router;