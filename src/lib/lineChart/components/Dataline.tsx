import React from 'react';
import {Path, Polyline} from 'react-native-svg';
import {NumericalAxisType, Variant} from '../LineChart';

interface DatalineProps {
  numericalAxisValues: NumericalAxisType;
  xUnit: number;
  chartHeight: number;
  maxYValue: number;
  type: Variant;
  axisIndex: number;
}
export const DataLine = ({
  numericalAxisValues,
  xUnit,
  maxYValue,
  chartHeight,
  type,
  axisIndex,
}: DatalineProps) => {
  const points = numericalAxisValues.data.map((d, index) => {
    return {
      y: chartHeight - (chartHeight * d) / maxYValue,
      x: xUnit * index,
    };
  });
  const createAreaPath = (data: number[]) => {
    const path = data
      .map((y, i) => {
        const x = i * xUnit;
        const yCoord = chartHeight - (y / maxYValue) * chartHeight;
        return i === 0 ? `M ${x},${yCoord}` : `L ${x},${yCoord}`;
      })
      .join(' ');

    return `${path} L ${
      (data.length - 1) * xUnit
    },${chartHeight} L 0,${chartHeight} Z`;
  };
  return (
    <React.Fragment>
      {type === 'area' && (
        <Path
          d={createAreaPath(numericalAxisValues.data)}
          fill={`url(#gradient-${axisIndex})`}
        />
      )}
      <Polyline
        points={points.map(p => [p.x, p.y]).join(' ')}
        fill="none"
        stroke={numericalAxisValues.strokeColor}
        strokeWidth={numericalAxisValues.strokeWidth}
      />
    </React.Fragment>
  );
};
