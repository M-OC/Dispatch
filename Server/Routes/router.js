module.exports = function (app, express) {
  app.get('/', function (req, res) {
  	res.send();
  });

  // app.get('/user', /*AUTHENTICATE*/, function (req, res) {
  //   res.send();
  // });
}