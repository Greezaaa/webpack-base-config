const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TercerPlugin = require("terser-webpack-plugin");


module.exports = {
    mode: 'production',
    // mode: "production";

    output: {
        clean: true, //limpiar archivos
        filename: 'assets/js/main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,  //buscar todos los archivos html del proyecto
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
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TercerPlugin(),
        ]
    },

    plugins: [
        new HtmlWebpack({
            title: 'My webpack app',
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: 'assets/css/[name].[fullhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: "assets/" },
            ],
        }),
    ]


}

