import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// get all products
app.get('/products', async (req: Request, res: Response) => {
    const products = await prisma.product.findMany({
        include: { seller: true}
    })
    res.json({ products });
});

// POST create a product
app.post('/products', async (req: Request, res: Response) => {
    const product = await prisma.product.create({
        data: {
            title: "Real shirt", 
            desc: "Real slacks",
            userId: "ckxu2qd170161y9eeheimmduo"
        }
    })
    res.json({ product });
});

// get a single product
app.get('/products/:product_id', async (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

// delete a single product
app.delete('/products/:product_id', async (req: Request, res: Response) => {
    res.json({ message: 'Awesome Possum'});
});

app.listen(3001);