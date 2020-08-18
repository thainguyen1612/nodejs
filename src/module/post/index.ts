import { Router, Request, Response } from 'express';
import * as posts from './postController';
// const posts = require('../app/controllers/myblog/posts');

const router: Router = Router();

router.get('/posts', posts.getPosts);
// router.get('/posts/popularPosts', posts.popularPosts);
// router.get('/posts/:id', posts.detail);

export default router;
