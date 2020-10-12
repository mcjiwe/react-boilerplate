import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { accessTokenSecret } from '../db';

export const authenticateJWT: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      console.log(user);

      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;

      return next();
    });
  } else {
    res.sendStatus(401);
  }
};
