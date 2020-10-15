import React from 'react';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';

import { Text } from '../../components/text/text';
import { useHomeStyles } from './home.styles';

export const Home = (props: RouteComponentProps) => {
  const styles = useHomeStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      className={styles.root}>
      <Grid item>
        <Text weight="Medium" variant="h1">
          Welcome Loopers
        </Text>
      </Grid>
      <Grid item>
        <Box height={50}></Box>
      </Grid>
      <Grid container item spacing={6} justify="center">
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader
              title={<Text variant="h6">React vs Vue vs Angular</Text>}
              subheader={<Text variant="body1">Web Frameworks</Text>}
            />
            <CardContent>
              <Text variant="body2">
                The 3 most popular front end frameworks used nowadays to build
                web and mobile applications.
              </Text>
              <Text variant="body2">
                We will go about the main strengths and weaknesses of each one.
              </Text>
            </CardContent>
            <CardActions>
              <Button size="small" href="/frameworks">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader
              title={<Text variant="h6">SPA vs MPA</Text>}
              subheader={<Text variant="body1">Web Architectures</Text>}
            />
            <CardContent>
              <Text variant="h6">SPA vs MPA</Text>
            </CardContent>
            <CardActions>
              <Button size="small" href="/architectures">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader
              title={<Text variant="h6">SSR vs CSR</Text>}
              subheader={<Text variant="body1">Rendering Methods</Text>}
            />
            <CardContent>
              <Text variant="h6">SSR vs CSR</Text>
            </CardContent>
            <CardActions>
              <Button size="small" href="/methods">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
