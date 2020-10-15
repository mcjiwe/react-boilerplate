import React from 'react';

import {
  Box,
  Divider,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core';
import { LabelImportantSharp, ChevronRightSharp } from '@material-ui/icons';
import { RouteComponentProps } from '@reach/router';

import angular from '../../assets/angular.svg';
import react from '../../assets/react.svg';
import vue from '../../assets/vue.png';
import { Text } from '../../components/text/text';
import { useFrameworksStyles } from './frameworks.styles';

export const Frameworks = (props: RouteComponentProps) => {
  const styles = useFrameworksStyles();

  const frameworks = [
    'Laravel (PHP)',
    'Rails (Ruby)',
    'Express (NodeJS)',
    'Spring (Java)',
    'Ember (JavaScript)',
    'Meteor (JavaScript)',
  ];

  const reactPros = [
    'Fast thanks to Virtual DOM, only renders what is required',
    `Reusable components allow for better readibility, 
    development and maintenance`,
    'Lots of libraries to extend application functionalities',
    'Easy to test',
  ];

  const reactCons = [
    `Not very SEO friendly (CSR), crawlers require that the page be
    rendered prior to indexing the page`,
    `Libraries also come with a cost be it in the added bundle size or
    vunerabilities, so careful consideration is required`,
    `React is constantly evolving at a high pace this makes it hard for
    some developers to keep up to date`,
  ];

  const angularPros = [
    'Two-way data binding, thanks to MVC Model',
    'Directives are used to extend HTML and add/remove elements from the DOM',
    'TypeScript',
    `Reusable components allow for better readibility, 
    development and maintenance`,
  ];

  const angularCons = [
    'Very verbose',
    'Steep learning curve, complex framework compared to others',
  ];

  const vuePros = [
    'Fast thanks to Virtual DOM, only renders what is required',
    `Very easy to learn, its pure old HTML, CSS and JavaScript, 
    there is no need to learn other libraries or JSX`,
    `Reusable components allow for better readibility, 
    development and maintenance`,
    `Easy to integrate, one can choose to use Vue inside 
    an ongoing project for a specific part only`,
  ];

  const vueCons = [
    `Not very good for large-scale projects, 
    since the technology is still very young`,
    `Limited ecosystem`,
  ];

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper variant="elevation" className={styles.textContainer}>
          <Text weight="Bold" variant="h3">
            <img src={react} alt="logo" className={styles.icon} /> React
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {reactPros.map((pros) => (
              <ListItem>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>

          <Text weight="Medium">Cons:</Text>
          <List dense>
            {reactCons.map((cons) => (
              <ListItem>
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
            <img src={angular} alt="logo" className={styles.icon} /> Angular
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {angularPros.map((pros) => (
              <ListItem>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>
          <Text weight="Medium">Cons:</Text>
          <List dense>
            {angularCons.map((pros) => (
              <ListItem>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>

          <Box my={3}>
            <Divider />
          </Box>

          <Text weight="Bold" variant="h3">
            <img src={vue} alt="logo" className={styles.icon} /> Vue
          </Text>
          <Text weight="Medium">Pros:</Text>
          <List dense>
            {vuePros.map((pros) => (
              <ListItem>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>
          <Text weight="Medium">Cons:</Text>
          <List dense>
            {vueCons.map((pros) => (
              <ListItem>
                <ListItemIcon>
                  <ChevronRightSharp />
                </ListItemIcon>
                <ListItemText primary={pros} />
              </ListItem>
            ))}
          </List>

          <Box my={3}>
            <Divider />
          </Box>

          <Text weight="Bold">Other popular frameworks:</Text>
          <List dense>
            {frameworks.map((framework) => (
              <ListItem>
                <ListItemIcon>
                  <LabelImportantSharp />
                </ListItemIcon>
                <ListItemText primary={framework} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
