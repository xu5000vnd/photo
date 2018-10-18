const FlickrAPI = require('flickr-sdk');
const { FLICKR_API_KEY, FLICKR_USER_ID } = require('../config/keys');

const Flick = new FlickrAPI(FLICKR_API_KEY);

module.exports = app => {
  //get album list
  app.get('/api/flickr/photosets/getlist', async (req, res) => {
    const data = await Flick.photosets.getList({
      user_id: FLICKR_USER_ID
    });
    res.send(data.body.photosets.photoset || {});
  });

  //get photos of album
  app.get('/api/flickr/photosets/getphotos/:albumid', (req, res) => {
    const albumid = req.params.albumid;
    Flick.photosets.getPhotos({
      user_id: FLICKR_USER_ID,
      photoset_id: albumid
    })
    .then((result) => {
      res.send(result.body.photoset.photo || {});
    })
    .catch((err) => {
      res.send(err.response.body);
    });
  });

  //get album detail
  app.get('/api/flickr/photosets/getinfo/:albumid', (req, res) => {
    const albumid = req.params.albumid;
    Flick.photosets.getInfo({
      user_id: FLICKR_USER_ID,
      photoset_id: albumid
    })
    .then((result) => {
      res.send(result.body.photoset || {});
    })
    .catch((err) => {
      res.send(err.response.body);
    });
  });

  //get photo detail
  app.get('/api/flickr/photos/getinfo/:photoid', (req, res) => {
    const photoid = req.params.photoid;
    Flick.photos.getInfo({
      photo_id: photoid
    })
    .then((result) => {
      res.send(result.body.photo || {});
    })
    .catch((err) => {
      res.send(err.response.body);
    });
  });

  //get photo images
  app.get('/api/flickr/photos/getsizes/:photoid', (req, res) => {
    const photoid = req.params.photoid;
    Flick.photos.getSizes({
      photo_id: photoid
    })
    .then((result) => {
      res.send(result.body.sizes.size || {});
    })
    .catch((err) => {
      res.send(err.response.body);
    });
  });

  //Returns next and previous photos for a photo in a set.
  app.get('/api/flickr/photosets/getcontext/:albumid/photo/:photoid', (req, res) => {
    const albumid = req.params.albumid;
    const photoid = req.params.photoid;
    Flick.photosets.getContext({
      photoset_id: albumid,
      photo_id: photoid
    })
    .then((result) => {
      res.send(result.body || {});
    })
    .catch((err) => {
      res.send(err.response.body);
    });
  });
};
