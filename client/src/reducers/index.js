import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import albums from './AlbumReducer';
import utils from './UtilsReducer';
import blogs from './BlogReducer';

export default combineReducers({
  albumList: albums,
  form: reduxForm,
  utils,
  blogs
});
