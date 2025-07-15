import React from 'react';
import {ScrollView, View} from 'react-native';
import NumericalAxis from '../lineChart/components/NumericalAxis';
import {TiltAngle} from '../lineChart/components/CategoricalAxis';
import Svg, {G} from 'react-native-svg';
import {HorizontalDivisions} from '../lineChart/components/Divisions';
import BarGraphCategoricalAxis from './components/BarGraphCategoricalAxis';
import DataBars from './components/DataBars';
import {AnimationType} from './hooks/useAnimatedBar';

export interface NumericalAxisType {
  data: Array<number>;
  strokeColor: string;
}
type BarChartProps = {
  numericalAxes: NumericalAxisType[];
  catergoricalAxis: Array<string>;
  barWidth: number;
  barGap: number;
  chartHeight?: number;
  minChartWidth?: number;
  categoricalAxisHeight?: number;
  categoricalLabelTilt?: TiltAngle;
  dashedLineWidth?: number;
  dashedLineGap?: number;
  dashedLineColor?: string;
  categoricalLabelColor?: string;
  numericalLabelColor?: string;
  categoricalLabelFontSize?: number;
  numericalLabelFontSize?: number;
  variant?: 'gradient' | 'default';
  animationType?: AnimationType;
  friction?: number;
  tension?: number;
  duration?: number;
  easing?: (value: number) => number;
  endOpacity?: number;
};
const BarChart = ({
  numericalAxes,
  catergoricalAxis,
  barWidth,
  barGap,
  chartHeight = 300,
  minChartWidth = 0,
  categoricalAxisHeight,
  categoricalLabelTilt,
  dashedLineGap,
  dashedLineWidth,
  dashedLineColor,
  categoricalLabelColor,
  numericalLabelColor,
  numericalLabelFontSize,
  categoricalLabelFontSize,
  variant,
  animationType,
  friction,
  tension,
  duration,
  easing,
  endOpacity,
}: BarChartProps) => {
  const chartWidth = Math.max(
    catergoricalAxis.length * (barWidth + barGap),
    minChartWidth,
  );
  const totalYDivisions = Math.floor(chartHeight / 50);
  const max = Math.max(...numericalAxes.map(na => na.data).flat());
  const yUnit = max / totalYDivisions;
  const maxYValue = max + yUnit;
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <NumericalAxis
        maxHeight={maxYValue}
        totalDivisions={totalYDivisions}
        chartHeight={chartHeight}
        labelColor={numericalLabelColor}
        fontSize={numericalLabelFontSize}
      />
      <ScrollView horizontal style={{display: 'flex'}}>
        <View>
          <Svg height={chartHeight} width={chartWidth}>
            <G>
              <HorizontalDivisions
                totalYDivisions={totalYDivisions}
                chartHeight={chartHeight}
                chartWidth={chartWidth}
                dashedLineGap={dashedLineGap}
                dashedLineWidth={dashedLineWidth}
                dashedLineColor={dashedLineColor}
              />
            </G>
            <DataBars
              barGap={barGap}
              barWidth={barWidth}
              numericalAxesValues={numericalAxes}
              maxYValue={maxYValue}
              chartHeight={chartHeight}
              variant={variant}
              animationType={animationType}
              friction={friction}
              tension={tension}
              duration={duration}
              easing={easing}
              endOpacity={endOpacity}
            />
          </Svg>
          <BarGraphCategoricalAxis
            barGraphcategoricalAxis={catergoricalAxis}
            barGap={barGap}
            barWidth={barWidth}
            height={categoricalAxisHeight}
            tiltAngle={categoricalLabelTilt}
            fontSize={categoricalLabelFontSize}
            labelColor={categoricalLabelColor}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BarChart;
