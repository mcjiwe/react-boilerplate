import Axios, { AxiosError, AxiosResponse } from 'axios';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';

import { accessTokenSecret, users } from './db';
import { authenticateJWT } from './middleware/AuthenticateJWT';
import { APIErrorData } from './models/APIError';
import { TVShowData } from './models/TVShow';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Workshop API');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.email === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { email: user.email, role: user.role },
      accessTokenSecret,
      { expiresIn: '20m' }
    );

    res.json({
      accessToken,
      user: {
        email: user.email,
        role: user.role,
      },
    });
  } else {
    res.status(401).send('Email or password incorrect.');
  }
});

app.post('/user', authenticateJWT, (req, res) => {
  const user = req.user;

  res.json({ user });
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
        .json(error.response?.data)
    );
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server service started on port ${process.env.SERVER_PORT}`);
});
