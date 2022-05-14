import React, { FC, useMemo } from 'react';

import Skeleton from '@mui/material/Skeleton';

import { getRandomInt } from '@utils/random';

interface Props {
  linesNumber?: number;
  minPercent?: number;
  maxPercent?: number;
}

const SkeletonLines: FC<Props> = ({
  linesNumber = 4,
  minPercent = 80,
  maxPercent = 95,
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
    <>
      {lines.map(({ key, widthPercent }) => (
        <Skeleton key={key} width={`${widthPercent}%`} />
      ))}
    </>
  );
};

export default SkeletonLines;
