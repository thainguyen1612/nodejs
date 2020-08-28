import { Request, Response } from 'express';

type getPosts = Response;

export function getPosts(req: Request, res: Response): Response {

  return res.send(x);
}
