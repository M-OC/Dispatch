import {projects, initialValues} from '../../Projects'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {template} from './static-template.js'
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
		var component = factories[selection](initialState[selection]) || null;
		if (component) {
			res.html = template(renderToStaticMarkup(component), req.params.project, initialState[selection]);
		} else {
			res.html = null;
		}
		next();
	});

	app.use('/Components', express.static(path.join(__dirname, '../../Build/IsomorphicComponents')));

  app.use('/', express.static(path.join(__dirname, '../../Build/ClientBundle')));
};