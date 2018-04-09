module.exports = {
    entry: {
        // 指定相对路径
        app: './app.js'
    },

    output: {
        filename: '[name].[hash:8].js'
    },

    module: {
        rules: [
            {
                // 匹配文件
                test: /.js$/,
                // 使用的loader,第一种写法
                // use: 'babel-loader',
                // 使用的loader,第二种写法
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                target: {
                                    browsers: ["last 2 versions", "> 1%"]
                                }
                            }]
                        ]
                    }
                },
                // 排除文件
                exclude: /node_modules/
            }
        ]
    }
}