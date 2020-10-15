import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useNavbarStyles = makeStyles((theme) =>
  createStyles({
    header: {
      padding: theme.spacing(2),
    },
    icon: {
      height: 50,
      width: 50,
      marginRight: 20,
    },
    title: {
      flexGrow: 1,
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.light,
      padding: theme.spacing(1, 2),
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
    },
  })
);
