import { createStyles, makeStyles } from '@material-ui/core';

export const useTvShowsStyles = makeStyles((theme) =>
  createStyles({
    showCard: {
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
    showCardTitle: {
      margin: theme.spacing(1),
      height: '5vh',
      textAlign: 'center',
    },
    showCardText: {
      margin: theme.spacing(2),
      height: '10vh',
      width: '100%',
      overflowY: 'hidden',
    },
    loadMore: {
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
