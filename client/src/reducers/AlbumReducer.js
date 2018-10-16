import { ALBUMS_FETCH, ALBUM_DETAIL } from '../actions/types';

const INITIAL_STATE = {
  albums: [],
  albumPhotos: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUMS_FETCH:
      return { ...state, albums: action.payload };
    case ALBUM_DETAIL:
      return { ...state, albumPhotos: action.payload};
    default:
      return state;
  }
};
