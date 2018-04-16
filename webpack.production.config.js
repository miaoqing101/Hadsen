var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/index.js',
        details: './src/js/details.js',
        company: './src/js/company.js',
        applications: './src/js/applications.js',
        // vue: ['vue'],
        // vueRouter: ['vue-router'],
        // jquery: ['jquery'],
        vendor: ['vue', 'vue-router', 'jquery'],
        // bootstrap: ['bootstrap']
    },
    output: {
        path: 'dist',
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize:true}),
        new webpack.optimize.CommonsChunkPlugin(
            // name: ['vueRouter', 'vue'],
            // filename: '[name].chunk.js',
            // minChunks: Infinity
            {
                // name: ['jquery', 'vueRouter', 'vue'],
                name: "vendor",
                filename: '[name].chunk.js'
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue',
            VueRouter: 'vue-router',
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}