import Axios, { AxiosError, AxiosResponse } from 'axios';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';

import { accessTokenSecret, users } from './db';
import { authenticateJWT } from './middleware/AuthenticateJWT';
import { APIErrorData } from './models/APIError';
import { TVShowData } from './models/TVShow';

dotenv.config();

const app = express();

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Workshop API');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret,
      { expiresIn: '20m' }
    );

    res.json({
      accessToken,
    });
  } else {
    res.send('Username or password incorrect');
  }
});

app.get('/tvshows/:page', authenticateJWT, (req, res) => {
  const { page } = req.params;

  Axios.get(`${process.env.TMDB_URL}/tv/popular`, {
    params: { api_key: process.env.TMDB_API_KEY, page },
  })
    .then((response: AxiosResponse<TVShowData>) => res.send(response.data))
    .catch((error: AxiosError<APIErrorData>) =>
      res
        .status(error.response?.data.status_code ?? 500)
        .send(error.response?.data)
    );
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server service started on port ${process.env.SERVER_PORT}`);
});
