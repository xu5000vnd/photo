module.exports = (app, csrf) => {
  app.post('/contact/sendmail', csrf, (req, res) => {
    res.send({ status: 'success' });
  });
};
