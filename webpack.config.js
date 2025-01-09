const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Process all .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use babel-loader to transpile JS files
        },
      },
      {
        test: /\.css$/,  // Handle CSS if needed
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // Your HTML template file
    }),
  ],
  mode: 'development',
};
