import {renderToString} from 'react-dom/server'
import React from 'react'


module.exports = function (app, express) {
  app.get('/Projects/:project', function (req, res) {
  	if (res.html !== null) {
	  	res.send(res.html);
  	} else {
  		res.sendStatus(404);
  	}
  });
}