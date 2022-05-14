import React, { FC, useMemo } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { getRandomInt } from '@utils/random';

interface Props {
  linesNumber?: number;
  minPercent?: number;
  maxPercent?: number;
  height?: number;
  className?: string;
}

const SkeletonLines: FC<Props> = ({
  linesNumber = 4,
  minPercent = 80,
  maxPercent = 95,
  height,
  className,
}) => {
  const lines = useMemo(() => {
    const lines: Array<{ key: number; widthPercent: number }> = [];
    for (let i = 0; i < linesNumber; i++) {
      const widthPercent = getRandomInt(minPercent, maxPercent);
      lines.push({ key: i, widthPercent });
    }
    return lines;
  }, [linesNumber, maxPercent, minPercent]);

  return (
    <Stack spacing={1} className={className}>
      {lines.map(({ key, widthPercent }) => (
        <Skeleton key={key} width={`${widthPercent}%`} height={height} />
      ))}
    </Stack>
  );
};

export default SkeletonLines;
