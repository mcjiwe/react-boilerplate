import React from 'react';

import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';

import { theme } from './App.theme';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { SharedStateContainer } from './hooks/state/sharedState';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <CssBaseline />
        <SharedStateContainer.Provider>
          <Navbar />
          <Content />
        </SharedStateContainer.Provider>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
