var path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

const endpoints = {
	client: path.join(__dirname, 'Client'),
	build: path.join(__dirname, 'Build')
};

const common = {
	entry: {
		app: endpoints.build
	},
	output: {
		path: endpoints.client,
		filename: 'app.js'
	}
};

if (TARGET === 'start' || !TARGET) {
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

if (TARGET === 'build') {
  module.exports = merge(common, {});
}