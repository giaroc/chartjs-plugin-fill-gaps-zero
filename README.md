# chartjs-plugin-fill-gaps-zero

This plugin fill gaps with zero in X time axis for line Chart. Made for Chart.js **3.X**

## Installation

#### Load directly in the browser

Load ChartJS first, then the plugin which will automatically register itself with ChartJS

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/giaroc/chartjs-plugin-fill-gaps-zero/src/chartjs-plugin-fill-gaps-zero.min.js"></script>
```

#### Download
[Compress](https://cdn.jsdelivr.net/gh/giaroc/chartjs-plugin-fill-gaps-zero/src/chartjs-plugin-fill-gaps-zero.min.js)  
[Uncompress](https://raw.githubusercontent.com/giaroc/chartjs-plugin-fill-gaps-zero/main/src/chartjs-plugin-fill-gaps-zero.js)

#### NPM
You can also install chartjs-plugin-labels by using node.js.

    npm install chartjs-plugin-labels

## Configuration

To configure the fill-gaps-ze ro plugin you need the following options in the X axis namespace: `options.scales.x`

Name                | Type         | Description
--------------------|--------------|------------
`fillGapsWithZero`  | `boolean`    | If true enable the functionality to fill gaps with zero
`minUnit`           | `string`     | Definition of the unit (eg. `day`) to be marked as zero

### Example

```javascript
{
  type: 'line',
  data: {
    labels: [],
    datasets: []
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

## Contributing

Pull requests and issues are always welcome. For bugs and feature requests, [please create an issue](https://github.com/giaroc/chartjs-plugin-fill-gaps-zero/issues).

## License

**chartjs-plugin-fill-gaps-zero.js** is available under the [MIT license](http://opensource.org/licenses/MIT).