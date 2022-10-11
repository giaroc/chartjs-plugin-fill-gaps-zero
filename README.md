# chartjs-plugin-fill-gaps-zero

This plugin fill gaps with zero in X time axis for line Chart. Made for Chart.js **3.X**

## Installation

TBD

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