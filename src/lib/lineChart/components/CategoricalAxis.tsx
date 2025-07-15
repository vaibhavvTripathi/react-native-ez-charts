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
type CategoricalAxisProps = {
  categoricalAxis: Array<string>;
  xUnit: number;
  height?: number;
  tiltAngle?: TiltAngle;
  labelColor?: string;
  fontSize?: number;
};
const CategoricalAxis = ({
  categoricalAxis,
  xUnit,
  tiltAngle = 0,
  height = 60,
  labelColor,
  fontSize,
}: CategoricalAxisProps) => {
  return (
    <Svg height={height}>
      {categoricalAxis.map((c, index) => {
        return (
          <Text
            y={(3 * height) / 4}
            transform={`rotate(${tiltAngle}, ${index * xUnit}, 10)`}
            x={index * xUnit - (index !== 0 ? 5 : 0)}
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

export default CategoricalAxis;
