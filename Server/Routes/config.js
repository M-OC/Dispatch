import {projects, initialValues} from '../../Projects'
import React from 'react'
import path from 'path'


const factories = Object.keys(projects).reduce(function (factoryObject, component, index) {
	factoryObject[component] = React.createFactory(projects[component]);
	return factoryObject;
}, {});

const initialState = Object.keys(initialValues).reduce(function (values, component, index) {
	values[index] = initialValues[index] || {};
	return values;
}, {});


module.exports = function (app, express) {
	app.use('/Projects/:project', function(req, res, next) {
		var selection = req.params.project;
		res.component = factories[selection](initialState[selection]) || null;
		next();
	});

  app.use('/', express.static(path.join(__dirname, '../../Build/ClientBundle')));
};