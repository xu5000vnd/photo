import axios from 'axios';
import { URL_API_BLOG } from '../keys';
import * as Utils from '../utils/Utils';
import {
  BLOG_FETCH_RECENT_POSTS,
  BLOG_FETCH_CATEGORIES,
  BLOG_FETCH_POST,
  BLOG_FETCH_POSTS,
  BLOG_FETCH_TAGS
} from './types';

export const blogFetchRecentPosts = () => async (dispatch) => {
  const res = await axios(`${URL_API_BLOG}/posts?_embed`);
  dispatch({
    type: BLOG_FETCH_RECENT_POSTS,
    payload: res.data
  });
};

export const blogFetchCategories = () => async dispatch => {
  // const categories = Utils.getCookie('categories');
  const categories = null;
  let data = '';
  if (categories) {
    data = JSON.parse(categories);
  } else {
    const res = await axios(`${URL_API_BLOG}/categories`);
    Utils.setCookie('categories', JSON.stringify(res.data));
    data = res.data;
  }

  dispatch({
    type: BLOG_FETCH_CATEGORIES,
    payload: data
  });
};

export const blogFetchTags = () => async dispatch => {
  // const tags = Utils.getCookie('tags');
  const tags = null;
  let data = '';
  if (tags) {
    data = JSON.parse(tags);
  } else {
    const res = await axios(`${URL_API_BLOG}/tags`);
    Utils.setCookie('tags', JSON.stringify(res.data));
    data = res.data;
  }

  dispatch({
    type: BLOG_FETCH_TAGS,
    payload: data
  });
};


export const blogGetPost = (history, postId) => async dispatch => {
  try {
    const res = await axios(`${URL_API_BLOG}/posts/${postId}`);
    dispatch({
      type: BLOG_FETCH_POST,
      payload: res.data
    });
  } catch (error) {
    history.push('/404');
  }
};

export const blogCateGetPosts = (history, cateId) => async dispatch => {
  try {
    const res = await axios(`${URL_API_BLOG}/posts?_embed&categories=${cateId}`);
    dispatch({
      type: BLOG_FETCH_POSTS,
      payload: res.data
    });
  } catch (error) {
    history.push('/404');
  }
};

export const blogTagGetPosts = (tagId) => async dispatch => {
  const res = await axios(`${URL_API_BLOG}/posts?_embed&tags=${tagId}`);
  dispatch({
    type: BLOG_FETCH_POSTS,
    payload: res.data
  });
};