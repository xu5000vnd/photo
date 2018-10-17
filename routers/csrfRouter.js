module.exports = (app, csrf) => {
  app.get('/getcsrftoken', csrf, (req, res) => {
    res.send({ _csrf: req.csrfToken() });
  });
};
