import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// get all products
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

// create a product
app.post('/', (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

// get a single product
app.get('/:product_id', (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

// delete a single product
app.delete('/:product_id', (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

app.listen(3001);