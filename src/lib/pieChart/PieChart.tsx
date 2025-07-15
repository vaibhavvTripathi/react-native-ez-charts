import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {
  Path,
  G,
  Text,
  Line,
  Defs,
  Stop,
  LinearGradient,
} from 'react-native-svg';

export interface Slice {
  value: number;
  color: string;
  label?: {value: string; color: string};
}

export const PieChart = ({
  data,
  variant,
  size,
  labelFontSize = 20,
  gradient = true,
  endOpacity = 0.4,
}: {
  data: Slice[];
  variant?: 'inscribed' | 'offset';
  size: number;
  labelFontSize?: number;
  gradient?: boolean;
  endOpacity?: number;
}) => {
  const radius = variant === 'offset' ? size / 2 : size; // Adjust as needed
  const cx = size;
  const cy = size;
  const total = data.reduce((sum, slice) => sum + slice.value, 0);
  const type = variant ?? 'inscribed';
  let startAngle = 0;

  const createArcPath = (value: number) => {
    const angle = (value / total) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const avgAngle = (startAngle + endAngle) / 2;

    const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
    const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
    const x2 = cx + radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = cy + radius * Math.sin((Math.PI * endAngle) / 180);
    const labelXInscribedCoordinate =
      cx + (radius / 2) * Math.cos((Math.PI * avgAngle) / 180);
    const labelYInscribedCoordinate =
      cy + (radius / 2) * Math.sin((Math.PI * avgAngle) / 180);
    const labelXOffsetCoordinate =
      cx + (radius + radius / 3) * Math.cos((Math.PI * avgAngle) / 180);
    const labelYOffsetCoordinate =
      cy + (radius + radius / 3) * Math.sin((Math.PI * avgAngle) / 180);
    const tickStartX = cx + radius * Math.cos((Math.PI * avgAngle) / 180);
    const tickStartY = cy + radius * Math.sin((Math.PI * avgAngle) / 180);
    const tickEndX =
      cx + (radius + radius / 4) * Math.cos((Math.PI * avgAngle) / 180);
    const tickEndY =
      cy + (radius + radius / 4) * Math.sin((Math.PI * avgAngle) / 180);
    const path = `
      M ${cx} ${cy}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
    startAngle = endAngle;
    return {
      path,
      labelXInscribedCoordinate,
      labelYInscribedCoordinate,
      labelXOffsetCoordinate,
      labelYOffsetCoordinate,
      tickStartX,
      tickStartY,
      tickEndX,
      tickEndY,
      avgAngle,
    };
  };

  return (
    <View style={styles.container}>
      <Svg height={size * 2} width={size * 2}>
        {gradient && (
          <Defs>
            {data.map((na, index) => (
              <LinearGradient
                key={`gradient-${index}`}
                id={`gradient-${index}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1">
                <Stop offset="100%" stopColor={na.color} stopOpacity="1" />
                <Stop
                  offset="0%"
                  stopColor={na.color}
                  stopOpacity={`${endOpacity}`}
                />
              </LinearGradient>
            ))}
          </Defs>
        )}
        <G>
          {data.map((slice, index) => {
            const pathVariables = createArcPath(slice.value);
            return (
              <G key={index}>
                <Path
                  d={pathVariables.path}
                  fill={!gradient ? slice.color : `url(#gradient-${index})`}
                />
                {slice.label && type === 'inscribed' && (
                  <Text
                    x={pathVariables.labelXInscribedCoordinate}
                    y={pathVariables.labelYInscribedCoordinate}
                    fill={slice.label.color}
                    fontSize={labelFontSize}
                    transform={`rotate(${pathVariables.avgAngle}, ${pathVariables.labelXInscribedCoordinate}, ${pathVariables.labelYInscribedCoordinate})`}>
                    {slice.label.value}
                  </Text>
                )}
                {slice.label && type === 'offset' && (
                  <>
                    <Text
                      x={pathVariables.labelXOffsetCoordinate}
                      y={pathVariables.labelYOffsetCoordinate}
                      fontSize={labelFontSize}
                      fill={slice.label.color}>
                      {slice.label.value}
                    </Text>
                    <Line
                      x1={pathVariables.tickStartX}
                      x2={pathVariables.tickEndX}
                      y1={pathVariables.tickStartY}
                      y2={pathVariables.tickEndY}
                      stroke={slice.color}
                      strokeWidth={1}
                    />
                  </>
                )}
              </G>
            );
          })}
        </G>
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});
