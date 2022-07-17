import express, { Request, Response } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from './config';
import { supabase } from './supabase';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = config.server.port ?? 5000;
const publicPath = path.join(__dirname, '..', 'client/dist');

app.use(express.static(publicPath));

app.get('/', async (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
