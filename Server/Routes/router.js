var ReactDomServer = require('react-dom/server');
var ReactRouter = require('react-router');
var React = require('react');

var ComponentList = require('../../Projects/Client/projects.js').default;


module.exports = function (app, express) {
  app.get('/Projects/:project', function (req, res) {
  	var Component = ComponentList[req.params.project] || res.sendStatus(404);
  	var response = ReactDomServer.renderToString(Component);
  	res.send(response);

  });
}