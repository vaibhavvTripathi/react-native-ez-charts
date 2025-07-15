import React from 'react';
import {ScrollView, View} from 'react-native';
import Svg, {G, Defs, LinearGradient, Stop} from 'react-native-svg';
import NumericalAxis from './components/NumericalAxis';
import {DataLine} from './components/Dataline';
import {Labels} from './components/Labels';
import CategoricalAxis, {TiltAngle} from './components/CategoricalAxis';
import {HorizontalDivisions} from './components/Divisions';

export type Variant = 'area' | 'blank';
export interface NumericalAxisType {
  data: Array<number>;
  strokeColor: string;
  strokeWidth: number;
}
interface LineChartProps {
  catergoricalAxis: Array<string>;
  numericalAxes: NumericalAxisType[];
  chartHeight?: number;
  minChartWidth?: number;
  modifyToolTipLabel?: (x: string, y: number) => string;
  xUnit?: number;
  showToolTip?: boolean;
  categoricalAxisHeight?: number;
  categoricalLabelTilt?: TiltAngle;
  dashedLineWidth?: number;
  dashedLineGap?: number;
  dashedLineColor?: string;
  variant?: Variant;
  categoricalLabelColor?: string;
  numericalLabelColor?: string;
  categoricalLabelFontSize?: number;
  numericalLabelFontSize?: number;
  toolTipColor?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  numericalAxes,
  catergoricalAxis,
  chartHeight = 300,
  minChartWidth = 0,
  modifyToolTipLabel = (x, y) => `(${x},${y})`,
  xUnit = 70,
  showToolTip = false,
  categoricalAxisHeight,
  categoricalLabelTilt,
  variant,
  dashedLineGap,
  dashedLineWidth,
  dashedLineColor,
  categoricalLabelColor,
  numericalLabelColor,
  numericalLabelFontSize,
  categoricalLabelFontSize,
  toolTipColor,
}) => {
  const chartWidth = Math.max(catergoricalAxis.length * xUnit, minChartWidth);
  const totalYDivisions = Math.floor(chartHeight / 50);
  const max = Math.max(...numericalAxes.map(na => na.data).flat());
  const yUnit = max / totalYDivisions;
  const maxYValue = max + yUnit;
  const type = variant ?? 'blank';
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
            {type === 'area' && (
              <Defs>
                {numericalAxes.map((na, index) => (
                  <LinearGradient
                    key={`gradient-${index}`}
                    id={`gradient-${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1">
                    <Stop
                      offset="0%"
                      stopColor={na.strokeColor}
                      stopOpacity="0.5"
                    />
                    <Stop
                      offset="100%"
                      stopColor={na.strokeColor}
                      stopOpacity="0"
                    />
                  </LinearGradient>
                ))}
              </Defs>
            )}
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
            <G>
              {numericalAxes.map((na, index) => (
                <React.Fragment key={`line-area-${index}`}>
                  <DataLine
                    numericalAxisValues={na}
                    xUnit={xUnit}
                    chartHeight={chartHeight}
                    maxYValue={maxYValue}
                    type={type}
                    axisIndex={index}
                    key={index}
                  />
                </React.Fragment>
              ))}
              {showToolTip &&
                numericalAxes.map((na, index) => (
                  <Labels
                    numericalAxisValues={na}
                    xUnit={xUnit}
                    chartHeight={chartHeight}
                    maxYValue={maxYValue}
                    modifyToolTipLabel={modifyToolTipLabel}
                    key={index}
                    categoricalAxis={catergoricalAxis}
                    toolTipColor={toolTipColor}
                  />
                ))}
            </G>
          </Svg>
          <CategoricalAxis
            height={categoricalAxisHeight}
            categoricalAxis={catergoricalAxis}
            xUnit={xUnit}
            tiltAngle={categoricalLabelTilt}
            labelColor={categoricalLabelColor}
            fontSize={categoricalLabelFontSize}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LineChart;
