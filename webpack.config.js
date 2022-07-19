const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    output: {
        clean: true,

    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /\main.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\main.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]',
                },
            },
        ]
    },
    optimization: {

    },
    plugins: [
        new HtmlWebpack({
            title: 'My webpack app',
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: 'assets/css/[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: "assets/" },
            ],
        }),
    ]


}

