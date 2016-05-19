const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const fs = require('fs');
const target = process.env.npm_lifecycle_event;

const endpoints = {
	client: path.join(__dirname, 'Client'),
	clientBuild: path.join(__dirname, 'Build/ClientBundle'),
	server: path.join(__dirname, 'Server/server.js'),
	serverBuild: path.join(__dirname, 'Build/ServerBundle')
};

const client = {
	entry: {
		app: endpoints.client
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: endpoints.clientBuild,
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
			include: endpoints.client
		}]
	}
};

const server = {
	entry: {
		projects: endpoints.server
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	node: {
		__dirname: false
	},
	output: {
		//library: 'server',
		//libraryTarget: 'node',
		target: 'node',
		path: endpoints.serverBuild,
		filename: 'server.js'
	},
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
	module: {
		loaders: [{
			test: /\.css$/,
			loaders: ['style','css']
		},
		{
			test: /\.js?$/,
			loaders: ['babel?cacheDirectory'],
			include: endpoints.server
		}]
	}
};

if (target === 'start') {
  module.exports = merge(client, {
  	devServer: {
  		contentBase: endpoints.clientBuild,
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
} else {
  module.exports = [client, server];
}