/* https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5 */
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'app.bundle.[hash].min.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					}, 
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(component.html)$/,
				use: [
					{
						loader: "file-loader?name=[path][name].[ext]&context=./src",
					}
				]
			},
			{
				test: /\.ico$/,
				use: [
					{
						loader: "file-loader?name=[name].[ext]"
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "app.bundle.[hash].min.css"
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
	],
	devtool: 'source-map',
	externals: [],
	devServer: {
		historyApiFallback: true
	}
};