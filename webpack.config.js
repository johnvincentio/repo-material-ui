const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_FOLDER = path.resolve(__dirname, './src');
const ASSETS_FOLDER = path.resolve(__dirname, './src/assets');
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');
const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './css');

require('dotenv').config(); // load from .env file

const config = {
	entry: ['./src/index.jsx', './src/scss/index.scss'],
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},

	devtool: 'inline-source-map', // development
	// devtool: 'eval-source-map',		// development
	//	devtool: 'source-map',	// production
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false, // true
		// inline: true,
		port: 8010,
		clientLogLevel: 'info',
		proxy: {
			'/api/**': { target: 'http://localhost:3001', changeOrigin: true, secure: false }
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				// regular css files
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader/url!file-loader',
					use: ['css-loader'],
					publicPath: DIST_FOLDER_STYLE
				})
			},
			{
				// sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				include: ASSETS_FOLDER,
				loader: 'file-loader?name=assets/[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV', 'API_KEY']),
		new ExtractTextPlugin({
			// define where to save the file
			filename: '[name].bundle.css',
			allChunks: true
		}),
		new CopyWebpackPlugin([{ from: 'index.html', to: '.' }], { debug: 'info' })
	]
};

module.exports = config;
