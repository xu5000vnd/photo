import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import albums from './AlbumReducer';

export default combineReducers({
  albumList: albums,
  form: reduxForm
});
