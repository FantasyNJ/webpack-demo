var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        // 发布路径，可以是绝对路径
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,

                // 后面的先执行
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ],

                // 使用link引入css文件，不常用
                // use: [
                //     {
                //         loader: 'style-loader/url'
                //     },
                //     {
                //         loader: 'file-loader'
                //     },
                // ]
            }
        ]
    },
}