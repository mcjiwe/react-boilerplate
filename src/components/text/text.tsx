import React from 'react';

import { Box, Typography, TypographyProps } from '@material-ui/core';

interface TextProps extends TypographyProps {
  children: any;
  size?: number | string;
  weight?: 'Regular' | 'Medium' | 'Bold';
  fontStyle?: 'normal' | 'italic' | 'oblique';
  letterSpacing?: number | string;
  margin?: number;
}

export const Text = ({
  children,
  size,
  weight,
  fontStyle,
  letterSpacing,
  margin,
  ...props
}: TextProps) => {
  return (
    <Typography {...props}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        fontSize={size}
        fontWeight={'fontWeight' + weight}
        fontStyle={fontStyle}
        letterSpacing={letterSpacing}
        m={margin ?? 0.5}>
        {children}
      </Box>
    </Typography>
  );
};
