/*
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    or
http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
*/
export const getImage = ({ farm, server, id, secret, size }) => {
  if (size) {
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};