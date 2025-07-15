import React from 'react';
import {Animated} from 'react-native';
import {Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import {AnimationType, useBarAnimation} from '../hooks/useAnimatedBar';

type SingleBarProp = {
  groupIndex: number;
  barGap: number;
  barWidth: number;
  singleBarWidth: number;
  chartHeight: number;
  bar: {data: number; color: string};
  maxYValue: number;
  index: number;
  variant?: 'gradient' | 'default';
  animationType?: AnimationType;
  friction?: number;
  tension?: number;
  duration?: number;
  easing?: (value: number) => number;
  endOpacity?: number;
};

// Create an Animated version of Rect
const AnimatedRect = Animated.createAnimatedComponent(Rect);

const SingleBar = ({
  index,
  barGap,
  barWidth,
  singleBarWidth,
  chartHeight,
  bar,
  maxYValue,
  groupIndex,
  variant = 'default',
  animationType = 'spring',
  friction,
  tension,
  duration,
  easing,
  endOpacity,
}: SingleBarProp) => {
  const getYValue = (d: number) => {
    return chartHeight - (chartHeight * d) / maxYValue;
  };

  const finalHeight = chartHeight - getYValue(bar.data);
  const heightAnim = useBarAnimation(finalHeight, {
    type: animationType,
    friction,
    tension,
    duration,
    easing,
  });

  const animatedY = heightAnim.interpolate({
    inputRange: [0, chartHeight],
    outputRange: [chartHeight, 0],
  });

  const gradientId = `gradient-${index}-${groupIndex}`;

  return (
    <>
      {variant === 'gradient' && (
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={bar.color} stopOpacity={1} />
            <Stop
              offset="100%"
              stopColor={bar.color}
              stopOpacity={endOpacity ?? 0.2}
            />
          </LinearGradient>
        </Defs>
      )}
      <AnimatedRect
        x={index * (barGap + barWidth) + groupIndex * singleBarWidth}
        y={animatedY} // Animate the 'y' position
        height={finalHeight} // Animate the height
        width={singleBarWidth}
        fill={variant === 'gradient' ? `url(#${gradientId})` : bar.color}
        key={index + '|' + groupIndex}
      />
    </>
  );
};

export default SingleBar;
