/*!
 * chartjs-plugin-fill-gaps-zero.js
 * Version: 1.0.0
 *
 * Copyright 2022 Giacomo Rocco
 * Released under the MIT license
 * https://github.com/giaroc/chartjs-plugin-fill-gaps-zero
 *
 */
var fillGapsWithZeroPlugin = {
    id: 'chartjs-plugin-fill-gaps-zero',
    beforeUpdate: function (c) {

        /* Get time object if exists */
        var timeAxis = c.options.scales.x;

        /* If time object not exists or we are not filling gaps with 0s, abort */
        if (!timeAxis || !timeAxis.fillGapsWithZero) return;

        var min, max, newLabels = [], newData = [], assoc = {};

        /*
        Loop through the dates (config labels).
        Find the min and max date, and add all dates/values to assoc.
        */
        var dates = c.data.labels;

        for (var index = 0; index < c.data.datasets.length; index++) {
            for (var i = 0; i < dates.length; i++) {

                /* Current date */
                var val = moment(dates[i]);

                /* If current date the min, set as min */
                if (!min || min.diff(val) > 0)
                    min = val;

                /* If current date the max, set as max */
                if (!max || max.diff(val) < 0)
                    max = val;

                /* Store all in assoc array */
                if (!(index in assoc)) {
                    assoc[index] = {}
                }

                assoc[index][val.format(timeAxis.parser)] = c.data.datasets[index].data[i];
            }
        }

        if (min !== undefined && max !== undefined) {

            for (var d_index = 0; index < c.data.datasets.length; index++) {
                newData = [];
                newLabels = [];
                /* From the min date, and looping by minUnit until max date */
                for (var d = min; max.diff(d) >= 0; d.add(1, timeAxis.minUnit)) {

                    /* Current date */
                    var cur = d.format(timeAxis.parser);

                    newLabels.push(cur);

                    /* Add zero for day if not represented */
                    if (!assoc[d_index][cur]) {
                        newData.push(0);
                    } else {
                        newData.push(assoc[d_index][cur]);
                    }
                }

                /* Replace the labels */
                c.data.labels = newLabels;

                /* Replace the data */
                c.data.datasets[d_index].data = newData;
            }
        }


        return;
    }
}