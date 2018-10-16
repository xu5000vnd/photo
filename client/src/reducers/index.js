import { combineReducers } from 'redux';
import albums from './AlbumReducer';

export default combineReducers({
  albumList: albums
});
