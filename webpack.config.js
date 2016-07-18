var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
    vendor: ['redux', 'react', 'react-dom', 'react-redux']
  },
  output: {
    filename: '[name].js',
    publicPath: 'dist/',
    path: './dist'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js', Infinity)
  ],
  devServer: {
    inline: true,
    historyApiFallback: true
  }
};