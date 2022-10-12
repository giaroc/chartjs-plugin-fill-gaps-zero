const path = require('path');

module.exports = {
    entry: './src/chartjs-plugin-fill-gaps-zero.js',
    output: {
        filename: 'chartjs-plugin-fill-gaps-zero.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
};