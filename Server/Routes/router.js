import ReactDomServer from 'react-dom/server'
//import ReactRouter from 'react-router'
import React from 'react'
import ComponentList from '../../Projects'


module.exports = function (app, express) {

  app.get('/Projects/:project', function (req, res) {
  	var Component = ComponentList[req.params.project] || res.sendStatus(404);
  	var response = ReactDomServer.renderToString(<Component/>);

  	res.send(response);
  });
}