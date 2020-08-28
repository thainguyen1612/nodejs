import { Request, Response } from 'express';

type getPosts = Response;

export function getPosts(req: Request, res: Response): Response {
  //const x: string = 'welcome';

  return res.send(x);
}
