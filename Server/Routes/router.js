import {renderToString} from 'react-dom/server'
import React from 'react'



module.exports = function (app, express) {
  app.get('/Projects/:project', function (req, res) {
  	res.send(renderToString(res.component));
  });


}