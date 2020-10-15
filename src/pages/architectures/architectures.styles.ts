import { makeStyles, createStyles } from '@material-ui/core';

export const useArchitecturesStyles = makeStyles((theme) =>
  createStyles({
    textContainer: {
      minWidth: '50vw',
      padding: theme.spacing(3),
    },
  })
);
