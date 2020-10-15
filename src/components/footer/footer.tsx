import React from 'react';

import { Link, Typography } from '@material-ui/core';

import { useFooterStyles } from './footer.styles';

export const Footer = () => {
  const styles = useFooterStyles();

  return (
    <footer className={styles.footer}>
      <Typography variant="body1">React Workshop</Typography>
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://www.theloop.pt/">
          The Loop co.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};
