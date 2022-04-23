// Inspired: https://mui.com/components/app-bar/#back-to-top

import React, { FC, MouseEvent, ReactNode } from 'react';

import Box from '@mui/material/Box';

interface ScrollToElementProps {
  className?: string;
  children: ReactNode;
}

const ScrollToTop: FC<ScrollToElementProps> = ({ className, children }) => {
  const handleClick = (event: MouseEvent) => {
    const anchor = (
      (event.target as HTMLElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Box className={className} onClick={handleClick}>
      {children}
    </Box>
  );
};

export default ScrollToTop;
