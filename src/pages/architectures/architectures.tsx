import React from 'react';

import { Box, Divider, Grid, Paper } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';

import { Text } from '../../components/text/text';
import { useArchitecturesStyles } from './architectures.styles';

export const Architectures = (props: RouteComponentProps) => {
  const styles = useArchitecturesStyles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper variant="elevation" className={styles.textContainer}>
          <Text weight="Bold" variant="h3">
            Single Page Application (SPA)
          </Text>

          <Box my={3}>
            <Divider />
          </Box>

          <Text weight="Bold" variant="h3">
            Multi Page Application (MPA)
          </Text>
        </Paper>
      </Grid>
    </Grid>
  );
};
