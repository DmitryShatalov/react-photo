import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('<h2>Привет Express!</h2>');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
