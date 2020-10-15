import React, { useEffect } from 'react';

import { Router } from '@reach/router';

import { useApi } from '../../hooks/api/api';
import { Architectures } from '../../pages/architectures/architectures';
import { Frameworks } from '../../pages/frameworks/frameworks';
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { Methods } from '../../pages/methods/methods';
import { TvShows } from '../../pages/tvShows/tvShows';
import { useContentStyles } from './content.styles';

export const Content = () => {
  const styles = useContentStyles();
  const { getUser } = useApi();

  useEffect(() => {
    const validateToken = async () => {
      await getUser();
    };
    validateToken();
  }, []);

  return (
    <Router className={styles.mainRouter}>
      <Home path="/" />
      <Login path="/login" />
      <TvShows path="tv-shows" />
      <Frameworks path="frameworks" />
      <Architectures path="architectures" />
      <Methods path="methods" />
    </Router>
  );
};
