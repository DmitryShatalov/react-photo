import express, { Request, Response } from 'express';
import { config } from './config';
import { supabase } from './supabase';

const app = express();
const port = config.server.port ?? 5000;

app.get('/', async (req: Request, res: Response) => {
  const { data: user, error } = await supabase.auth.api.createUser({
    email: 'shatal1@yandex.ru',
    password: '12345',
    user_metadata: { name: 'Yoda' },
    email_confirm: true,
  });
  console.log(user);
  console.log(error);
  res.send('<h2>Привет Express!</h2>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
