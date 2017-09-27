/*eslint-disable */
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'app/js/app.js'
  },
    module: {
        loaders:[
            {test:/\.js$/, exclude:/node_modules/, loader:'babel-loader'},
            {test:/\.jsx$/, exclude:/node_modules/, loader:'babel-loader'} 
        ]
    },
      devServer: {
      historyApiFallback: true
  }
};
