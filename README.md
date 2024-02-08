# chartjs-plugin-fill-gaps-zero

The chartjs-plugin-fill-gaps-zero plugin serves the purpose of filling missing elements in a line time chart's X-axis with zero values. It is designed for compatibility with Chart.js versions **3.X** and **4.X**.

[![](https://data.jsdelivr.com/v1/package/npm/chartjs-plugin-fill-gaps-zero/badge)](https://www.jsdelivr.com/package/npm/chartjs-plugin-fill-gaps-zero)

## Demo

[Demo](https://giaroc.github.io/chartjs-plugin-fill-gaps-zero/samples/demo/)

## Installation

#### Load directly in the browser

First, load Chart.js, followed by the plugin, which will automatically register itself with Chart.js. Additionally, remember to include **moment.js** and **chartjs-adapter-moment** as the plugin utilizes **moment.js** for date parsing.

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/giaroc/chartjs-plugin-fill-gaps-zero/src/chartjs-plugin-fill-gaps-zero.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/moment@^2"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-moment@^1"></script>

```

#### Download
[Compress](https://cdn.jsdelivr.net/gh/giaroc/chartjs-plugin-fill-gaps-zero/src/chartjs-plugin-fill-gaps-zero.min.js)  
[Uncompress](https://raw.githubusercontent.com/giaroc/chartjs-plugin-fill-gaps-zero/main/src/chartjs-plugin-fill-gaps-zero.js)

#### NPM
You can also install **chartjs-plugin-fill-gaps-zero** by using node.js.

    npm install chartjs-plugin-fill-gaps-zero

## Configuration

To configure the fill-gaps-zero plugin, you need the following options in the X-axis namespace: `options.scales.x`

Name                | Type         | Description
--------------------|--------------|------------
`fillGapsWithZero`  | `boolean`    | If true enable the functionality to fill gaps with zero
`minUnit`           | `string`     | Definition of the unit (eg. `day`) to be marked as zero

### Example

```javascript
{
  type: 'line',
  data: {
  labels: ['2024-01-24','2024-01-27', '2024-01-28', '2024-01-30', '2024-01-31'],
  datasets: [{
        label: '# of elements',
        data: [5,10,2,1,7],
        borderWidth: 1
    }]
  },
  options: {
    scales: {
      x: {
        fillGapsWithZero: true,
        minUnit: 'day',
        type: 'time',
        time: {
          unit: 'day'
        },
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: .3
      }
    }
  }
}
```

## Supported chart types

    line

## Problem with Chart.js 4.X

If you encounter issues integrating the plugin with Chart.js version 4.X, ensure that you follow the example provided above precisely. Pay close attention to the structure of labels and dataset data values to ensure compatibility.

## Contributing

Pull requests and issues are always welcome. For bugs and feature requests, [please create an issue](https://github.com/giaroc/chartjs-plugin-fill-gaps-zero/issues).

## License

**chartjs-plugin-fill-gaps-zero.js** is available under the [MIT license](http://opensource.org/licenses/MIT).
