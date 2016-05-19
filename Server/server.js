var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

require('./Routes/config.js')(app, express);
require('./Routes/router.js')(app, express);

app.listen(port);
console.log("Server listening on port " + port);
module.exports = app;

