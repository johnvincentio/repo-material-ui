const webpack = require('webpack');
const path = require('path');

const APP_FOLDER = path.resolve(__dirname, './src');
const SCSS_FOLDER = path.resolve(__dirname, './scss');
const ASSETS_FOLDER = path.resolve(__dirname, './src/assets');
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');
// const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './css');

const INCLUDE_SCSS_FOLDER = path.resolve(__dirname, './src');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSSBundle = new ExtractTextPlugin({
	filename: '[name].bundle.css',
	allChunks: true
});

require('dotenv').config(); // load from .env file

const config = {
	// entry: ['./src/index.jsx', './src/scss/index.scss', './src/components/main.scss'],
	entry: ['./src/index.jsx', './scss/index.scss'],

	output: {
		path: DIST_FOLDER,
		filename: 'bundle.js'
	},

	devtool: 'inline-source-map', // development
	// devtool: 'eval-source-map',		// development
	//	devtool: 'source-map',	// production
	devServer: {
		contentBase: DIST_FOLDER,
		compress: false, // true
		// inline: true,
		port: 8044,
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
			// {
			// 	// regular css files
			// 	test: /\.css$/,
			// 	loader: extractCSS.extract({
			// 		fallback: 'style-loader/url!file-loader',
			// 		use: ['css-loader'],
			// 		publicPath: DIST_FOLDER_STYLE
			// 	})
			// },

			{
				test: /\.(sass|scss)$/,
				include: INCLUDE_SCSS_FOLDER,
				exclude: [SCSS_FOLDER, /node_modules/],
				use: ['style-loader', 'css-loader', 'sass-loader']
			},

			{
				test: /\.(sass|scss)$/,
				include: SCSS_FOLDER,
				exclude: [INCLUDE_SCSS_FOLDER, /node_modules/],
				loader: extractSCSSBundle.extract(['css-loader', 'sass-loader'])
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
		extractSCSSBundle,
		new CopyWebpackPlugin([{ from: 'index.html', to: '.' }], { debug: 'info' })
	]
};

module.exports = config;

// {
// 	test: /\.(sass|scss)$/,
// 	include: INCLUDE_SCSS_FOLDER,
// 	exclude: [SCSS_FOLDER, /node_modules/],
// 	use: ['style-loader', 'css-loader?modules', 'sass-loader']
// },

// {
// 	test: /\.(sass|scss)$/,
// 	exclude: [SCSS_FOLDER, /node_modules/],
// 	loader: ExtractTextPlugin.extract({
// 		fallback: 'style-loader',
// 		use: ['css-loader?modules', 'sass-loader']
// 	})
// },

// {
// 	test: /\.(sass|scss)$/,
// 	exclude: [SCSS_FOLDER, /node_modules/],
// 	loader: ExtractTextPlugin.extract({
// 		fallback: 'style-loader',
// 		use: ['style-loader', 'css-loader?modules', 'sass-loader']
// 	})
// },

// {
// 	test: /\.(sass|scss)$/,
// 	exclude: [SCSS_FOLDER, /node_modules/],
// 	loader: extractSCSSSingle.extract(['style-loader', 'css-loader?modules', 'sass-loader'])
// },

// {
// 	test: /\.(sass|scss)$/,
// 	exclude: [SCSS_FOLDER, /node_modules/],
// 	use: ['style-loader', 'css-loader?modules', 'sass-loader']
// },

// new ExtractTextPlugin({
// 	// define where to save the file
// 	filename: '[name].bundle.css',
// 	allChunks: true
// }),

/*
			{
				// sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader?modules'
						},
						{
							loader: 'sass-loader'
						}
					]
					// publicPath: DIST_FOLDER_STYLE
				})
			},
*/
/*
				// sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				include: SCSS_FOLDER,
				exclude: /node_modules/,
				loader: extractSCSSBundle.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					publicPath: DIST_FOLDER_STYLE
				})
			},
*/

/*
			{
				test: /\.(sass|scss)$/,
				exclude: [SCSS_FOLDER, /node_modules/],
				loader: extractSCSSSingle.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader?modules'
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
*/
