var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


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

                // 提取css
                use: ExtractTextPlugin.extract({
                    // 当 CSS 没有被提取
                    fallback: [
                        {
                            loader: 'style-loader'
                        }
                    ],
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                // ident表明插件交给postcss处理
                                ident: 'postcss',
                                plugins: [
                                    // require('autoprefixer')(),
                                    require('postcss-cssnext')()
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: false
        })
    ]
}