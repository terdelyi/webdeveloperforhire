const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        site: './resources/js/site.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/site.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './resources/seo/sitemap.xml',
                    to: path.resolve(__dirname, 'dist')
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'resources/js'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
};

module.exports = () => {
    config.mode = (isProduction) ? 'production' : 'development';
    return config;
};
