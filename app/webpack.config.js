const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

	return {

		entry: './index.js',
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, '../assets')
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['react-app']
					}
				},
				{
					test: /\.s?css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								// you can specify a publicPath here
								// by default it use publicPath in webpackOptions.output
								publicPath: '../'
							}
						},
						'css-loader',
						"sass-loader"],
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "styles.css",
				// chunkFilename: "[id].css"
			})
		],
	}

};