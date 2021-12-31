import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

app.listen(3001);