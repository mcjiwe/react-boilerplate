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
import { useArchitecturesStyles } from './architectures.styles';

export const Architectures = (props: RouteComponentProps) => {
  const styles = useArchitecturesStyles();

  const spaPros = ['Caching', 'Mobile friendly'];

  const spaCons = ['SEO is not very good'];

  const mpaPros = ['SEO friendly'];

  const mpaCons = ['Bigger development time', 'Takes longer to load'];

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper variant="elevation" className={styles.textContainer}>
          <Text weight="Bold" variant="h3">
            Single Page Application (SPA)
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {spaPros.map((pros) => (
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
            {spaCons.map((cons) => (
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
            Multi Page Application (MPA)
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {mpaPros.map((pros) => (
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
            {mpaCons.map((cons) => (
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
