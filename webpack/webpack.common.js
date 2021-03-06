'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');
const appDir = path.resolve(rootDir, 'public');
const bundlesDir = path.resolve(appDir, 'bundles');

const resourcePattern = /\.(png|jpe?g|gif|svg|ico)$/;

module.exports = {

    rootDir: rootDir,
    resourcePattern: resourcePattern,

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: appDir
    },

    module: {
        loaders: [
            html(),
            jquery(),
            applicationStyles(),
            applicationTemplates()
        ]
    }
};

function html() {
    return { test: /\.html$/, loader: 'html' };
}

function applicationTemplates() {
    return { test: /\.ts$/, exclude: /node_modules/, loader: 'angular2-template-loader' };
}

function applicationStyles() {
    return { test: /\.css$/, include: appDir, loader: 'raw' };
}

function jquery() {
    return { test: /libraries.+\.js$/, loader: 'imports?jQuery=jquery,this=>window' }
}