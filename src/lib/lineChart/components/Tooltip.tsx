import {Circle, Text} from 'react-native-svg';
import React from 'react';
export const ToolTipPoint = ({
  x,
  y,
  text,
  circleColor,
  textColor,
}: {
  x: number;
  y: number;
  circleColor: string;
  text: string;
  textColor: string;
}) => {
  return (
    <>
      <Circle cx={x} cy={y} fill={circleColor} r={3} />
      {
        <Text x={x + 10} y={y + 10} fill={textColor}>
          {text}
        </Text>
      }
    </>
  );
};
