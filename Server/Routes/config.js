var path = require('path');

module.exports = function (app, express) {
	app.use('/', function(req, res, next) {
		console.log("__dirname = ", __dirname);
		next();
	})
  app.use('/', express.static(path.join(__dirname, '../../Build/ClientBundle')));
};