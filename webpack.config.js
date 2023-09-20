module.exports = {
    entry: './src/assets/js/auth.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/assets/js'
    },
    // devServer: {
    //     contentBase: './dist',
    // },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
        ]
    }
}