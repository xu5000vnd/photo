/*
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

https://www.flickr.com/services/api/misc.urls.html
s small square 75x75
q large square 150x150
t thumbnail, 100 on longest side
m small, 240 on longest side
n small, 320 on longest side
- medium, 500 on longest side
z medium 640, 640 on longest side
c medium 800, 800 on longest side†
b large, 1024 on longest side*
h large 1600, 1600 on longest side†
k large 2048, 2048 on longest side†
o original image, either a jpg, gif or png, depending on source format

*/
export const getImage = ({ farm, server, id, secret, size }) => {
  if (size) {
    return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};