import {G, Line} from 'react-native-svg';
import React from 'react';

export const VerticalDivisions = ({
  categoricalAxis,
  chartHeight,
  xUnit,
}: {
  categoricalAxis: Array<string>;
  chartHeight: number;
  xUnit: number;
}) => {
  return (
    <G>
      {categoricalAxis.map((_, index) => {
        const x = index * xUnit;
        return (
          <Line
            key={`vertical-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={chartHeight}
            stroke="#E0E0E0"
            strokeWidth="1"
          />
        );
      })}
    </G>
  );
};
export const HorizontalDivisions = ({
  totalYDivisions,
  chartHeight,
  chartWidth,
  dashedLineGap,
  dashedLineWidth,
  dashedLineColor,
}: {
  totalYDivisions: number;
  chartHeight: number;
  chartWidth: number;
  dashedLineWidth?: number;
  dashedLineGap?: number;
  dashedLineColor?: string;
}) => {
  return (
    <G>
      {/* Horizontal grid lines (already present) */}
      {Array.from({length: Math.max(totalYDivisions, 1) + 1}).map(
        (_, index) => (
          <Line
            key={`horizontal-${index}`}
            x1={0}
            y1={chartHeight * (index / Math.max(totalYDivisions, 1))}
            x2={chartWidth}
            y2={chartHeight * (index / Math.max(totalYDivisions, 1))}
            stroke={dashedLineColor ?? '#E0E0E0'}
            strokeWidth="1"
            strokeDasharray={`${dashedLineWidth ?? 10} ${dashedLineGap ?? 5}`}
          />
        ),
      )}
    </G>
  );
};
