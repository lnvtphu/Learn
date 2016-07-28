module.exports = {
  entry: "./components/DragBox.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
      loaders: [
       {test: /\.js$/, loader: 'jsx-loader'}
     ]
  }
};
