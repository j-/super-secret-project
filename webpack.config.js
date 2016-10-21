const path = require('path');

module.exports = {
	entry: {
		'bundle': './src/index.jsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.less'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.jsx?$/,
			},
			{
				loader: 'style!css?modules!less',
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.(css|less)$/,
			},
		],
	},
	devtool: 'source-map',
};
