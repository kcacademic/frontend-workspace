const webpack = require('webpack');

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    module: {
        rules: [
            {
				enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					failOnError: false,
					failOnWarning: false,
					outputReport: {
						filePath: "../report/eslint-report.json",
						formatter: require("eslint/lib/formatters/json")
					}
				}
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
				loader: "babel-loader"
            }
        ]
    },
    resolve: {
    extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };