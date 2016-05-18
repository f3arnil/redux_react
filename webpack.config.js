var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: __dirname,
    entry: {
        vendor: [
            'react',
    		'react-dom',
			'react-redux',
			'redux',
            'react-bootstrap/lib/Modal',
			'react-router',
            'webpack-hot-middleware/client',
            'babel-polyfill'
        ],
        application: path.resolve(__dirname, 'src/index')
    },
    output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin()
    ],
    module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loaders: ['eslint'],
    //     include: [
    //       path.resolve(__dirname, "src"),
    //     ],
    //   }
    // ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src")
        ],
        test: /\.js$/,
        plugins: ['transform-runtime']
      }
    ]
  }
}
