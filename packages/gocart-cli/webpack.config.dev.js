var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './'),
    devtool: 'source-map',
    entry: {
        app: './entry',
    },
    module: {
        loaders: [
            {
                test: require.resolve('react'),
                loader: 'expose?React',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader',
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            },
            {
                test: /\.woff$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    node: {
        dns: 'empty',
        net: 'empty',
    },
    output: {
        filename: '[name].js',
        library: 'gocart',
        libraryTarget: 'var',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                PLATFORM: JSON.stringify('browser'),
            },
        }),
    ],
}
