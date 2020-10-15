import { makeStyles } from '@material-ui/core';

export const useLoginStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {},
  submit: {
    margin: theme.spacing(3, 0, 0, 0),
  },
}));
