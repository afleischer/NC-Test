const webpack = require('webpack');
const path = require('path');

function getPlugin() {
    if(process.env.NODE_ENV === 'production') {
        return [
            new webpack.optimize.UglifyJsPlugin()
        ];
    } else {
        return [

        ];
    }
}

config = {
    entry: {
        main: ['./src/main.ts']

    },
    output: {
        filename: '[name].js',
        paths: path.resolve(__dirname, './dist/')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions:['.ts', '.tsx', '.js'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader?sourceMap',
                    "postcss-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: getPlugin()
};


config = {
    entry: {
        main: ['./src/main.ts']

    },
    output: {
        filename: '[name].js',
        paths: path.resolve(__dirname, './dist/')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions:['.ts', '.tsx', '.js'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader?sourceMap',
                    "postcss-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: getPlugin()
};

module.exports = config;