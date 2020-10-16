import React from 'react';

import { Box, Typography, TypographyProps } from '@material-ui/core';

interface TextProps extends TypographyProps {
  children: string;
  icon?: JSX.Element;
  size?: number | string;
  weight?: 'Regular' | 'Medium' | 'Bold';
  fontStyle?: 'normal' | 'italic' | 'oblique';
  letterSpacing?: number | string;
  margin?: number;
}

export const Text = ({
  children,
  icon,
  size,
  weight,
  fontStyle,
  letterSpacing,
  margin,
  ...props
}: TextProps) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      {icon}
      <Typography {...props}>
        <Box
          component="span"
          fontSize={size}
          fontWeight={'fontWeight' + weight}
          fontStyle={fontStyle}
          letterSpacing={letterSpacing}
          m={margin ?? 0.5}>
          {children}
        </Box>
      </Typography>
    </Box>
  );
};
