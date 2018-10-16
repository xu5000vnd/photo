import axios from 'axios';
import { ALBUMS_FETCH, ALBUM_DETAIL, PHOTO_DETAIL } from './types';

export const albumGetFetch = () => async (dispatch) => {
  const res = await axios('/api/flickr/photosets/getlist');
  dispatch({
    type: ALBUMS_FETCH,
    payload: res.data
  });
};

export const albumGetDetail = (albumid) => async (dispatch) => {
  const res = await axios(`/api/flickr/photosets/getphotos/${albumid}`);
  dispatch({
    type: ALBUM_DETAIL,
    payload: res.data
  });
};