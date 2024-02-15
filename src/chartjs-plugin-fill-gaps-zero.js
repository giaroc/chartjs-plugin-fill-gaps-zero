/*!
 * chartjs-plugin-fill-gaps-zero.js
 * Version: 1.0.3
 *
 * Copyright 2024 Giacomo Rocco
 * Released under the MIT license
 * https://github.com/giaroc/chartjs-plugin-fill-gaps-zero
 *
 * This work is intended to support Chart.js 3.x and 4.x.
 * It is based on the work done by @cyberbeat. Here is the repository:
 * https://github.com/cyberbeat/ChartJSTimescaleFillWithZerosPlugin
 *
 */

// Plugin definition
var fillGapsWithZeroPlugin = {
    id: "chartjs-plugin-fill-gaps-zero",
    beforeUpdate: function (chart) {
        // Get the time axis from the chart options
        var timeAxis = chart.options.scales.x;

        // Check if the time axis exists and if filling gaps with zeros is enabled
        if (!timeAxis || !timeAxis.fillGapsWithZero) return;

        // Variables to store the minimum and maximum dates, new labels, new data, and associative array for data storage
        var minDate, maxDate, newLabels, newData, assoc = {};

        // Get the date labels from the chart data
        var dates = chart.data.labels;

        // Loop through datasets to process each one
        chart.data.datasets.forEach(function (dataset, index) {
            // Loop through the date labels to find the minimum and maximum dates, and store all dates/values in the associative array
            dates.forEach(function (date, i) {
                // Parse the current date
                var val = moment(date);

                // Update the minimum date if the current date is earlier
                if (!minDate || minDate.diff(val) > 0) minDate = val;

                // Update the maximum date if the current date is later
                if (!maxDate || maxDate.diff(val) < 0) maxDate = val;

                // Store the dataset value for the current date in the associative array
                if (!(index in assoc)) {
                    assoc[index] = {};
                }

                assoc[index][val.format(timeAxis.parser)] = dataset.data[i];
            });
        });

        // If there are valid dates, fill in missing data with zeros for each dataset
        if (minDate !== undefined && maxDate !== undefined) {
            chart.data.datasets.forEach(function (dataset, d_index) {
                // Clone the minimum and maximum dates
                let newMinDate = minDate.clone();
                let newMaxDate = maxDate.clone();

                // Initialize arrays for new labels and data
                newData = [];
                newLabels = [];

                // Loop through dates from the minimum to maximum date, incrementing by the minimum time unit
                for (var date = newMinDate.clone(); newMaxDate.diff(date) >= 0; date.add(1, timeAxis.minUnit)) {
                    // Format the current date
                    var curDate = date.format(timeAxis.parser);

                    // Add the current date to the new labels array
                    newLabels.push(curDate);

                    // Add zero if data for the current date is missing, otherwise add the dataset value
                    if (!assoc[d_index][curDate]) {
                        newData.push(0);
                    } else {
                        newData.push(assoc[d_index][curDate]);
                    }
                }

                // Replace the chart labels and dataset data with the new labels and data
                chart.data.labels = newLabels;
                dataset.data = newData;
            });
        }

        return;
    },
};

// Register the plugin if Chart.js is available in the browser
if (typeof window !== "undefined" && window.Chart) {
    if (window.Chart.hasOwnProperty("register")) {
        window.Chart.register(fillGapsWithZeroPlugin);
    } else {
        window.Chart.plugins.register(fillGapsWithZeroPlugin);
    }
}

// Export the plugin for environments like Node.js
try {
    module.exports = exports = fillGapsWithZeroPlugin;
} catch (e) { }
