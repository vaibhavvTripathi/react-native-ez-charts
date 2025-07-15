import React from 'react';
import Svg, {Text} from 'react-native-svg';

export type TiltAngle =
  | 0
  | 5
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90;
type BarGraphCategoricalAxisProps = {
  barGraphcategoricalAxis: Array<string>;
  barWidth: number;
  barGap: number;
  height?: number;
  tiltAngle?: TiltAngle;
  labelColor?: string;
  fontSize?: number;
};
const BarGraphCategoricalAxis = ({
  barGraphcategoricalAxis,
  barGap,
  barWidth,
  tiltAngle = 0,
  height = 60,
  labelColor,
  fontSize,
}: BarGraphCategoricalAxisProps) => {
  return (
    <Svg height={height}>
      {barGraphcategoricalAxis.map((c, index) => {
        console.log(
          index * (barWidth + barGap) + barWidth / 2,
          'this is the label position',
        );
        return (
          <Text
            y={height / 2}
            transform={`rotate(${tiltAngle}, ${
              index * (barWidth + barGap) + barWidth / 2 + index * barGap
            }, ${height / 2})`}
            x={index * (barWidth + barGap) + barWidth / 2 - (fontSize ?? 14)}
            key={index}
            fill={labelColor ?? 'grey'}
            fontSize={fontSize ?? 14}>
            {c}
          </Text>
        );
      })}
    </Svg>
  );
};

export default BarGraphCategoricalAxis;
