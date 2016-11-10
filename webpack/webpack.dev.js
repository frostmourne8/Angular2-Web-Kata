'use strict';

const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const deployedConfig = require('./webpack.deployed');
const distDir = path.resolve(deployedConfig.rootDir, 'public');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(deployedConfig, {

    debug: true,
    devtool: 'source-map',

    devServer: {
        contentBase: distDir,     
        port: 9000,
        inline: false,
        proxy: {
            '/items': {
                target: {
                    host: "localhost",
                    protocol: 'http:',
                    port: 3000
                }
            }
        }
    },
    
    output: {
        filename: '[name].js',
        path: distDir
    },
});
