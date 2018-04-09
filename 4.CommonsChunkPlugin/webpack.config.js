var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        // 必须是多入口CommonsChunkPlugin才能生效
        'pageA': './pageA',
        'pageB': './pageB',
        // 第三方包
        'vendor': ['lodash']
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        // 下面1项将pageA和pageB的公共模块提取出来
        new webpack.optimize.CommonsChunkPlugin({
            // 公共代码打包出来的文件名字
            name: 'common',
            minChunks: 2,
            // 指定entry
            chunks: ['pageA', 'pageB']
        }),

        // // 只有下面1项的话是把lodash和webpack代码同时打包进vendor
        // new webpack.optimize.CommonsChunkPlugin({
        //     // 公共代码打包出来的文件名字
        //     name: 'vendor',
        //     minChunks: Infinity
        // }),
        // // 多了下面1项之后vendor只有lodash，webpack代码打包进下面的manifest
        // new webpack.optimize.CommonsChunkPlugin({
        //     // 公共代码打包出来的文件名字
        //     name: 'manifest',
        //     minChunks: Infinity
        // }),

        // 可以将两项合并，注意names的顺序
        new webpack.optimize.CommonsChunkPlugin({
            // 公共代码打包出来的文件名字
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
    ]
}