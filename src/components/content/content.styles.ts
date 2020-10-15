import { makeStyles } from '@material-ui/core';

export const useContentStyles = makeStyles((theme) => ({
  mainRouter: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    padding: theme.spacing(5, 5),
  },
}));
