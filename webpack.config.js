const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const target = process.env.npm_lifecycle_event;

const endpoints = {
	client: path.join(__dirname, 'Client'),
	build: path.join(__dirname, 'Build')
};

const common = {
	entry: {
		app: endpoints.build
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: endpoints.client,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loaders: ['style','css']
		},
		{
			test: /\.jsx?$/,
			loaders: ['babel?cacheDirectory'],
			include: endpoints.build
		}]
	}
};

if (target === 'start' || !target) {
  module.exports = merge(common, {
  	devServer: {
  		contentBase: endpoints.client,
  		historyApiFallback: true,
  		hot: true,
  		inline: true,
  		progress: true,
  		stats: 'errors-only',
  		host: process.env.HOST,
  		port: process.env.PORT
  	},
  	plugins: [new webpack.HotModuleReplacementPlugin()]
  });
}

if (target === 'build') {
  module.exports = merge(common, {});
}