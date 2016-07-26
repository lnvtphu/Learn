module.exports = {
  entry: "./components/Sort.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
      loaders: [
       {test: /\.js$/, loader: 'jsx-loader'}
     ]
  }
};
