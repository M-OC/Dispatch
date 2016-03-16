var path = require('path');

module.exports = function (app, express) {
  console.log(path.join(__dirname, '../Client'));
  console.log('Heyooo!');
  app.use('/', express.static(path.join(__dirname, '../../Client')));
  require('./router.js')(app, express);
};