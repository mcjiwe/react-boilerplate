import { makeStyles, createStyles } from '@material-ui/core';

export const useFrameworksStyles = makeStyles((theme) =>
  createStyles({
    textContainer: {
      minWidth: '50vw',
      padding: theme.spacing(3),
    },
    icon: {
      height: '5vh',
      width: '5vh',
      marginRight: 20,
    },
  })
);
