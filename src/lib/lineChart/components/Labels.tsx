import React from 'react';
import {NumericalAxisType} from '../LineChart';
import {ToolTipPoint} from './Tooltip';

interface LabelsProps {
  numericalAxisValues: NumericalAxisType;
  xUnit: number;
  chartHeight: number;
  maxYValue: number;
  modifyToolTipLabel: (x: string, y: number) => string;
  categoricalAxis: Array<string>;
  toolTipColor?: string;
}
export const Labels = ({
  numericalAxisValues,
  xUnit,
  maxYValue,
  chartHeight,
  categoricalAxis,
  modifyToolTipLabel,
  toolTipColor,
}: LabelsProps) => {
  const points = numericalAxisValues.data.map((d, index) => {
    return {
      y: chartHeight - (chartHeight * d) / maxYValue,
      x: xUnit * index,
      numericalValue: d,
      categoricalValue: categoricalAxis[index],
    };
  });
  return (
    <>
      {points.map((point, index) => {
        return (
          <ToolTipPoint
            x={point.x}
            y={point.y}
            text={modifyToolTipLabel(
              point.categoricalValue,
              point.numericalValue,
            )}
            key={index}
            circleColor={toolTipColor ?? numericalAxisValues.strokeColor}
            textColor={toolTipColor ?? numericalAxisValues.strokeColor}
          />
        );
      })}
    </>
  );
};
