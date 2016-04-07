module.exports = function (app, express) {
  app.get('/hey', function (req, res) {
  	console.log("HEYOOOO!");
  	res.send();
  });

  // app.get('/user', /*AUTHENTICATE*/, function (req, res) {
  //   res.send();
  // });
}