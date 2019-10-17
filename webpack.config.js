module.exports = {
  mode: 'development',
  watch: 'true',
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader:'file-loader?name=images/[name].[ext]'
        }]
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};