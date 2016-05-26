const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const fs = require('fs');
const target = process.env.npm_lifecycle_event;

const endpoints = {
	client: path.join(__dirname, 'Client'),
	clientBuild: path.join(__dirname, 'Build/ClientBundle'),
	server: path.join(__dirname, 'Server'),
	serverBuild: path.join(__dirname, 'Build/ServerBundle'),
	projects: path.join(__dirname, '/Projects'),
	componentBuild: path.join(__dirname, 'Build/IsomorphicComponents')
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
			include: [endpoints.client]
		}]
	}
};

const components = {
	entry: {
		"server-side-component.js": endpoints.projects + '/server-side-component.js'
	},
	output: {
		path: endpoints.componentBuild,
		filename: "[name]"
	},
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  module: {
  	loaders: [{
  		test: /\.jsx?$/,
			loaders: ['babel?cacheDirectory']
  	}]
  }
}

const server = {
	entry: {
		projects: endpoints.server + '/server.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	node: {
		__dirname: false
	},
	output: {
		target: 'node',
		path: endpoints.serverBuild,
		filename: 'server.js'
	},
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom', 'react'
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
			test: /\.jsx?$/,
			loaders: ['babel?cacheDirectory'],
			include: [endpoints.server, endpoints.projects]
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
  module.exports = [client, server, components];
}