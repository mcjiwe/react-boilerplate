import React from 'react';

import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core';
import { ChevronRightSharp } from '@material-ui/icons';
import { RouteComponentProps } from '@reach/router';

import { Text } from '../../components/text/text';
import { useMethodsStyles } from './methods.styles';

export const Methods = (props: RouteComponentProps) => {
  const styles = useMethodsStyles();

  const csrPros = [
    'Avoids full page reloads',
    'Faster rendering thanks to caching',
    'Great for web applications thanks to its reusability',
  ];

  const csrCons = [
    'Slower first rendering as it needs to load the first JS bundle',
    'Not SEO friendly since it requires the client to render every page',
    'Higher memory consumptiom on the client side',
  ];

  const ssrPros = ['Faster loading times', 'SEO friendly'];

  const ssrCons = [
    'Higher resource consumption, can be mitigated by caching',
    'Not easy to decide which routes require to be SSR or CSR',
  ];

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper variant="elevation" className={styles.textContainer}>
          <Text weight="Bold" variant="h3">
            Client Side Rendering (CSR)
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {csrPros.map((pros) => (
              <ListItem key={pros}>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>

          <Text weight="Medium">Cons:</Text>
          <List dense>
            {csrCons.map((cons) => (
              <ListItem key={cons}>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={cons} />
              </ListItem>
            ))}
          </List>

          <Box my={3}>
            <Divider />
          </Box>

          <Text weight="Bold" variant="h3">
            Server Side Rendering (SSR)
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {ssrPros.map((pros) => (
              <ListItem key={pros}>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>

          <Text weight="Medium">Cons:</Text>
          <List dense>
            {ssrCons.map((cons) => (
              <ListItem key={cons}>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={cons} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
