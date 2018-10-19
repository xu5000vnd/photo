import axios from 'axios';
import { URL_API_BLOG } from '../keys';
import { BLOG_FETCH_RECENT_POSTS, BLOG_FETCH_CATEGORIES } from './types';

export const blogPostFetchRecentPosts = () => async (dispatch) => {
  const res = await axios(`${URL_API_BLOG}/posts`);
  dispatch({
    type: BLOG_FETCH_RECENT_POSTS,
    payload: res.data
  });
};

export const blogCateFetchCategories = () => async dispatch => {
  const res = await axios(`${URL_API_BLOG}/categories`);
  dispatch({
    type: BLOG_FETCH_CATEGORIES,
    payload: res.data
  });
};
