import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';

import { Text } from '../../components/text/text';
import { useMethodsStyles } from './methods.styles';

export const Methods = (props: RouteComponentProps) => {
  const styles = useMethodsStyles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper variant="elevation" className={styles.textContainer}>
          <Text>Methods</Text>
        </Paper>
      </Grid>
    </Grid>
  );
};
