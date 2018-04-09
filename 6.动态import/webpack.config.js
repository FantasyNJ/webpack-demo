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
        // 发布路径，可以是绝对路径
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        // 下面1项将pageA和pageB的公共模块提取出来
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-common',
            children: true,
            minChunks: 2
        }),

        // 可以将两项合并，注意names的顺序
        new webpack.optimize.CommonsChunkPlugin({
            // 公共代码打包出来的文件名字
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
    ]
}