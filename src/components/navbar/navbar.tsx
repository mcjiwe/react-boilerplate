import React from 'react';

import {
  AppBar,
  Button,
  Grid,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useContainer } from 'unstated-next';

import react from '../../assets/react.svg';
import { useApi } from '../../hooks/api/api';
import { SharedStateContainer } from '../../hooks/state/sharedState';
import { useNavbarStyles } from './navbar.styles';

export const Navbar = () => {
  const styles = useNavbarStyles();
  const { logout } = useApi();
  const { state } = useContainer(SharedStateContainer);

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <img src={react} alt="logo" className={styles.icon} />

        <Typography variant="h3" className={styles.title}>
          <Link color="inherit" underline="none" href="/">
            React Workshop
          </Link>
        </Typography>

        <Grid container item spacing={2} justify="flex-end" xs={6}>
          {state.user && (
            <Grid item>
              <Button
                color="inherit"
                size="large"
                href="tv-shows"
                className={styles.button}>
                TV Shows
              </Button>
            </Grid>
          )}
          {state.user && (
            <Grid item>
              <Button
                color="inherit"
                size="large"
                onClick={logout}
                className={styles.button}>
                Logout
              </Button>
            </Grid>
          )}
          {!state.user && (
            <Grid item>
              <Button
                color="inherit"
                size="large"
                href="login"
                className={styles.button}>
                Login
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
