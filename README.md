# React Native Component Library Template


## Introduction

Welcome to the React Native Component Library Template! This template is designed to provide developers with a fast and efficient starting point for building their own React Native component libraries. It includes a set of pre-designed components that are easily customizable to fit your project's unique requirements.

## Features

* Pre-built React Native components ready for customization.
* Integrated with @shopify/restyle for theming and styling.
* Storybook integration for component documentation and testing.
* TypeScript support for type-safe coding.
* Essential development scripts for linting, testing, and building.

## Getting Started

1. Clone the Repository

```
git clone [repository-url]
cd [repository-directory]

```
2. Install Dependencies

```
yarn install
```
or 
```
npm install
```
3. Run Storybook (Optional)

To view and test components in Storybook:

```
yarn storybook
```
or
```
npm run storybook
```
## Customizing Components

* All components are located in the src/components directory.
* Use the theme.ts file in the src directory to customize the theme and styles.
* Add or modify components as needed for your specific use case.

## Building Your Library

After making changes, build your component library with:

```
yarn build
```
or
```
npm run build
```

This will compile your TypeScript and JavaScript files to the lib directory.

## Contributing
Contributions to improve this template are welcome. Please ensure to follow the contribution guidelines when submitting pull requests.
# BarChart Component Documentation

The `BarChart` component is a reusable React Native component for rendering customizable bar charts. It supports both numerical and categorical axes, animations, and visual customization.

---

## **Props**

| **Prop**                  | **Type**                                                                 | **Description**                                                                                                              | **Default**           |
|---------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `numericalAxes`           | `NumericalAxisType[]`                                                   | Array of numerical axes data. Each axis contains an array of numbers and a stroke color for rendering.                       | Required              |
| `catergoricalAxis`        | `Array<string>`                                                         | Array of labels for the categorical axis.                                                                                    | Required              |
| `barWidth`                | `number`                                                               | Width of each bar in the chart.                                                                                              | Required              |
| `barGap`                  | `number`                                                               | Gap between bars in the chart.                                                                                               | Required              |
| `chartHeight`             | `number`                                                               | Height of the chart in pixels.                                                                                               | `300`                 |
| `minChartWidth`           | `number`                                                               | Minimum width of the chart in pixels.                                                                                        | `0`                   |
| `categoricalAxisHeight`   | `number`                                                               | Height of the categorical axis.                                                                                              | Undefined             |
| `categoricalLabelTilt`    | `TiltAngle`                                                            | Angle at which categorical labels are tilted.                                                                                | Undefined             |
| `dashedLineWidth`         | `number`                                                               | Width of dashed lines for horizontal divisions.                                                                              | Undefined             |
| `dashedLineGap`           | `number`                                                               | Gap between dashed lines for horizontal divisions.                                                                           | Undefined             |
| `dashedLineColor`         | `string`                                                               | Color of dashed lines for horizontal divisions.                                                                              | Undefined             |
| `categoricalLabelColor`   | `string`                                                               | Color of categorical axis labels.                                                                                           | Undefined             |
| `numericalLabelColor`     | `string`                                                               | Color of numerical axis labels.                                                                                             | Undefined             |
| `categoricalLabelFontSize`| `number`                                                               | Font size of categorical axis labels.                                                                                       | Undefined             |
| `numericalLabelFontSize`  | `number`                                                               | Font size of numerical axis labels.                                                                                         | Undefined             |
| `variant`                 | `'gradient' | 'default'`                                                | Visual style of the bars.                                                                                                   | Undefined             |
| `animationType`           | `AnimationType`                                                        | Type of animation applied to the bars.                                                                                      | Undefined             |
| `friction`                | `number`                                                               | Friction value for animations.                                                                                              | Undefined             |
| `tension`                 | `number`                                                               | Tension value for animations.                                                                                               | Undefined             |
| `duration`                | `number`                                                               | Duration of the animations in milliseconds.                                                                                 | Undefined             |
| `easing`                  | `(value: number) => number`                                            | Easing function for animations.                                                                                             | Undefined             |
| `endOpacity`              | `number`                                                               | End opacity of animated bars.                                                                                               | Undefined             |

---

## **NumericalAxisType Interface**

| **Property**   | **Type**        | **Description**                          |
|----------------|-----------------|------------------------------------------|
| `data`         | `Array<number>` | Array of numerical data for the axis.    |
| `strokeColor`  | `string`        | Color of the axis stroke.                |

---

## **Example Usage**

```tsx
import React from 'react';
import BarChart from './BarChart';

const Example = () => {
  return (
    <BarChart
      numericalAxes={[{ data: [10, 20, 30], strokeColor: 'blue' }]}
      catergoricalAxis={['Jan', 'Feb', 'Mar']}
      barWidth={20}
      barGap={10}
      chartHeight={300}
      categoricalLabelColor="black"
      numericalLabelColor="gray"
    />
  );
};

export default Example;
```

---

## **Customization Options**
The `BarChart` component offers several properties for extensive customization, including:
- Animation control through `animationType`, `friction`, `tension`, `duration`, and `easing`.
- Styling options for axis labels, dashed lines, and bar appearance.
- Dynamic sizing with `chartHeight` and `minChartWidth` properties.

---

## **Dependencies**
This component relies on:
- `react-native-svg` for rendering graphical elements.
- Custom components like `NumericalAxis`, `HorizontalDivisions`, and `DataBars` for modular functionality.

---

## **Notes**
- Ensure numerical and categorical axes data align for proper chart rendering.
- The `animationType` property should correspond to a valid animation type defined in `useAnimatedBar`.

---

## **To Do**
- Add more customization options for tooltips and interactive features.
- Improve accessibility by adding ARIA roles and descriptions.

# LineChart Component

The `LineChart` component is a customizable React Native chart for visualizing numerical data against a categorical axis.

## Props

| Prop Name               | Type                                         | Default Value             | Description                                                                                       |
|-------------------------|----------------------------------------------|---------------------------|---------------------------------------------------------------------------------------------------|
| `catergoricalAxis`      | `Array<string>`                             | **Required**             | Labels for the categorical axis.                                                                |
| `numericalAxes`         | `NumericalAxisType[]`                       | **Required**             | Data for numerical axes, including values and line properties.                                   |
| `chartHeight`           | `number`                                    | `300`                     | Height of the chart area.                                                                        |
| `minChartWidth`         | `number`                                    | `0`                       | Minimum width of the chart.                                                                     |
| `modifyToolTipLabel`    | `(x: string, y: number) => string`          | `(x, y) => \`(${x},${y})\``| Callback to modify tooltip labels.                                                              |
| `xUnit`                 | `number`                                    | `70`                      | Horizontal spacing between data points.                                                         |
| `showToolTip`           | `boolean`                                   | `false`                   | Whether to display tooltips.                                                                    |
| `categoricalAxisHeight` | `number`                                    | `undefined`               | Height of the categorical axis.                                                                 |
| `categoricalLabelTilt`  | `TiltAngle`                                 | `undefined`               | Tilt angle for categorical axis labels.                                                         |
| `variant`               | `'area' | 'blank'`                          | `'blank'`                | Determines the type of chart, either area or blank line.                                         |
| `dashedLineWidth`       | `number`                                    | `undefined`               | Width of dashed lines for gridlines.                                                            |
| `dashedLineGap`         | `number`                                    | `undefined`               | Gap between dashes for gridlines.                                                               |
| `dashedLineColor`       | `string`                                    | `undefined`               | Color of dashed gridlines.                                                                      |
| `categoricalLabelColor` | `string`                                    | `undefined`               | Color of the categorical axis labels.                                                           |
| `numericalLabelColor`   | `string`                                    | `undefined`               | Color of the numerical axis labels.                                                             |
| `categoricalLabelFontSize` | `number`                                 | `undefined`               | Font size for categorical axis labels.                                                          |
| `numericalLabelFontSize` | `number`                                  | `undefined`               | Font size for numerical axis labels.                                                            |
| `toolTipColor`          | `string`                                    | `undefined`               | Color of the tooltips.                                                                          |

## NumericalAxisType

| Property      | Type         | Description                                                                 |
|---------------|--------------|-----------------------------------------------------------------------------|
| `data`        | `Array<number>` | Array of numerical data points.                                           |
| `strokeColor` | `string`      | Color of the line representing the data.                                  |
| `strokeWidth` | `number`      | Width of the line representing the data.                                  |

## Components Used

- **`NumericalAxis`**: Displays the numerical scale along the left side of the chart.
- **`DataLine`**: Renders the data lines or areas for numerical values.
- **`Labels`**: Displays tooltips for data points.
- **`CategoricalAxis`**: Renders the categorical labels below the chart.
- **`HorizontalDivisions`**: Adds horizontal gridlines to the chart.

## Example Usage

```tsx
import React from 'react';
import LineChart, { NumericalAxisType } from './LineChart';

const numericalAxes: NumericalAxisType[] = [
  {
    data: [10, 20, 30, 40, 50],
    strokeColor: 'blue',
    strokeWidth: 2,
  },
  {
    data: [15, 25, 35, 45, 55],
    strokeColor: 'red',
    strokeWidth: 2,
  },
];

const categoricalAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const App = () => (
  <LineChart
    numericalAxes={numericalAxes}
    catergoricalAxis={categoricalAxis}
    chartHeight={300}
    xUnit={60}
    showToolTip={true}
    variant="area"
  />
);

export default App;
```

## Notes

- Ensure the `catergoricalAxis` array length matches the number of data points in each numerical axis.
- Customize `modifyToolTipLabel` for tailored tooltip content.

Feel free to modify or enhance the component based on your requirements!

# PieChart Component

The `PieChart` component is a reusable and customizable React Native component designed to visualize data as a pie chart. It supports gradients, labels, and two variants for label placement.

## Props

| Prop Name      | Type                                     | Default Value | Description                                                                                                   |
|----------------|------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `data`         | `Slice[]`                               | **Required**  | Array of data slices to render. Each slice includes a value, color, and optional label.                       |
| `variant`      | `'inscribed' \| 'offset'`               | `'inscribed'` | Determines label placement. `inscribed` places labels inside the chart, while `offset` places them outside.   |
| `size`         | `number`                                | **Required**  | Diameter of the pie chart.                                                                                   |
| `labelFontSize`| `number`                                | `20`          | Font size for labels.                                                                                        |
| `gradient`     | `boolean`                               | `true`        | Whether to apply a gradient fill to slices.                                                                  |
| `endOpacity`   | `number`                                | `0.4`         | End opacity for gradient fill.                                                                               |

## Slice Interface

| Property   | Type                  | Description                                         |
|------------|-----------------------|-----------------------------------------------------|
| `value`    | `number`              | Value of the slice, determining its size in the chart. |
| `color`    | `string`              | Color of the slice.                                |
| `label`    | `{value: string; color: string}` | Optional label text and color.                  |

## Features

- **Gradient Support**: Allows applying gradients to slices with customizable end opacity.
- **Label Placement Variants**: 
  - **`inscribed`**: Labels are displayed inside the pie chart.
  - **`offset`**: Labels are placed outside the chart, with connecting lines.
- **Customizable Dimensions**: Chart size and label font size can be adjusted.

## Example Usage

```tsx
import React from 'react';
import { PieChart, Slice } from './PieChart';

const data: Slice[] = [
  { value: 40, color: 'red', label: { value: '40%', color: 'white' } },
  { value: 30, color: 'blue', label: { value: '30%', color: 'white' } },
  { value: 20, color: 'green', label: { value: '20%', color: 'white' } },
  { value: 10, color: 'yellow', label: { value: '10%', color: 'black' } },
];

const App = () => (
  <PieChart 
    data={data} 
    size={200} 
    variant="offset" 
    gradient={true} 
    endOpacity={0.3} 
  />
);

export default App;
```

## Notes

- Ensure that the `value` properties of all slices sum up to the desired total for accurate representation.
- Adjust the `endOpacity` to control the transparency effect in the gradient.
- When using the `offset` variant, make sure there is enough space around the chart for labels and lines.

Feel free to modify or enhance this component based on your specific use case!