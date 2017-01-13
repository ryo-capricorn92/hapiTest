module.exports = {
  entry: './client/app/index.jsx',
  output: {
    path: './client/compiled',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /(\.js|\.jsx)$/,
      loader: 'eslint-loader',
    }],
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
