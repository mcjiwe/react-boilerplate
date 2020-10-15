import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { RouteComponentProps } from '@reach/router';

import { useApi } from '../../hooks/api/api';
import { LoginData } from '../../models/Data/Login';
import { useLoginStyles } from './login.styles';

export const Login = ({ navigate }: RouteComponentProps) => {
  const classes = useLoginStyles();
  const { login } = useApi();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleChange = (key: keyof LoginData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginData({ ...loginData, [key]: event.target.value });
  };

  const onSubmit = () => {
    login(loginData.email, loginData.password)
      .then((success) => {
        success && navigate && navigate('/');
      })
      .catch((reason) => {
        console.log(reason);
      });
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Login
      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        value={loginData.email}
        onChange={handleChange('email')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={loginData.password}
        onChange={handleChange('password')}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={onSubmit}>
        Login
      </Button>
    </Container>
  );
};
