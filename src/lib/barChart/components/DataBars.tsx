import React from 'react';
import {G} from 'react-native-svg';
import SingleBar from './SingleBar';
import {NumericalAxisType} from '../BarChart';
import {AnimationType} from '../hooks/useAnimatedBar';

type DataBarsProps = {
  numericalAxesValues: NumericalAxisType[];
  barGap: number;
  barWidth: number;
  maxYValue: number;
  chartHeight: number;
  variant?: 'gradient' | 'default'; // Variant prop for selecting between gradient or default
  animationType?: AnimationType;
  friction?: number;
  tension?: number;
  duration?: number;
  easing?: (value: number) => number;
  endOpacity?: number;
};
const DataBars = ({
  numericalAxesValues,
  barGap,
  barWidth,
  maxYValue,
  chartHeight,
  variant,
  animationType,
  friction,
  tension,
  duration,
  easing,
  endOpacity,
}: DataBarsProps) => {
  // Get the maximum length of all the arrays
  const maxLength = Math.max(
    ...numericalAxesValues.map(arr => arr.data.length),
  );
  const singleBarWidth = barWidth / numericalAxesValues.length;
  // Use map to club the elements with the same index together
  const barGroup = Array.from(
    {length: maxLength},
    (_, i) =>
      numericalAxesValues
        .filter(arr => arr.data[i])
        .map(arr => {
          return {data: arr.data[i], color: arr.strokeColor};
        }), // Handle arrays with unequal lengths
  );

  return (
    <G>
      {barGroup.map((bars, index) => {
        return (
          <G key={index}>
            {bars.map((bar, i) => {
              return (
                <SingleBar
                  groupIndex={i}
                  barGap={barGap}
                  barWidth={barWidth}
                  singleBarWidth={singleBarWidth}
                  chartHeight={chartHeight}
                  bar={bar}
                  maxYValue={maxYValue}
                  index={index}
                  variant={variant}
                  animationType={animationType}
                  friction={friction}
                  tension={tension}
                  duration={duration}
                  easing={easing}
                  endOpacity={endOpacity}
                  key={i + '|' + index}
                />
              );
            })}
          </G>
        );
      })}
    </G>
  );
};

export default DataBars;
