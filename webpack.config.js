var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {test: /\.css$/, loaders: ["style-loader", "css-loader"] },
            { test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/, loader: "file-loader" },
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};