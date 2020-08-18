import express, {
  Request,
  Response,
} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import modPost from './module/post';

// express.application.use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(`../${__dirname}`, 'public')));

app.use(modPost);

app.use((req: Request, res: Response) => {
  res.sendStatus(404);
});

export default app;
