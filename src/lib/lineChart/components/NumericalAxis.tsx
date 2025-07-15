import React from 'react';
import Svg, {Text} from 'react-native-svg';

interface NumericalAxisProps {
  totalDivisions: number;
  maxHeight: number;
  chartHeight: number;
  labelColor?: string;
  fontSize?: number;
}

const NumericalAxis: React.FC<NumericalAxisProps> = ({
  totalDivisions,
  maxHeight,
  chartHeight,
  labelColor,
  fontSize,
}) => {
  const unit = maxHeight / Math.max(totalDivisions, 1);

  const yDivisions = Array.from(
    {length: totalDivisions + 1},
    (_, i) => i * unit,
  ).reverse();
  const getYValue = (index: number) => {
    if (index === yDivisions.length - 1) {
      return (chartHeight / totalDivisions) * index;
    } else if (index === 0) {
      return (chartHeight / totalDivisions) * index + 10;
    }
    return (chartHeight / totalDivisions) * index + 5;
  };
  return (
    <Svg width={50} height={chartHeight}>
      {yDivisions.map((value, index) => (
        <Text
          x={12}
          y={getYValue(index)}
          key={index}
          fill={labelColor ?? 'grey'}
          fontSize={fontSize ?? 12}>
          {value.toFixed(2)}
        </Text>
      ))}
    </Svg>
  );
};

export default NumericalAxis;
