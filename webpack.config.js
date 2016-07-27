module.exports = {
  entry: "./components/DragList.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
      loaders: [
       {test: /\.js$/, loader: 'jsx-loader'}
     ]
  }
};
