var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './lib/ui/'),
    devtool: 'eval',
    entry: {
        app: './test/entry.js',
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
                loader: 'jsx',
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('test'),
            },
        }),
    ],
    resolve: {
        alias: {
            __component__: path.resolve(__dirname, './lib/ui/component.js'),
        },
    },
}
