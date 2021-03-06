import axios from 'axios';
import { URL_API_BLOG } from '../keys';
import * as Utils from '../utils/Utils';
import {
  BLOG_FETCH_RECENT_POSTS,
  BLOG_FETCH_CATEGORIES,
  BLOG_FETCH_POST,
  BLOG_FETCH_POSTS,
  BLOG_FETCH_TAGS,
  BLOG_FETCH_PAGES,
  BLOG_FETCH_PAGE
} from './types';

export const blogFetchRecentPosts = () => async (dispatch) => {
  const recentPosts = Utils.getLocalStorage('recentPosts');
  let data = '';
  if (recentPosts) {
    data = JSON.parse(recentPosts);
  } else {
    const res = await axios(`${URL_API_BLOG}/posts?_embed`);
    Utils.setLocalStorage('recentPosts', JSON.stringify(res.data));
    data = res.data;
  }

  dispatch({
    type: BLOG_FETCH_RECENT_POSTS,
    payload: data
  });
};

export const blogFetchCategories = () => async dispatch => {
  const categories = Utils.getLocalStorage('categories');
  let data = '';
  if (categories) {
    data = JSON.parse(categories);
  } else {
    const res = await axios(`${URL_API_BLOG}/categories`);
    Utils.setLocalStorage('categories', JSON.stringify(res.data));
    data = res.data;
  }

  dispatch({
    type: BLOG_FETCH_CATEGORIES,
    payload: data
  });
};

export const blogFetchTags = () => async dispatch => {
  const tags = Utils.getLocalStorage('tags');
  let data = '';
  if (tags) {
    data = JSON.parse(tags);
  } else {
    const res = await axios(`${URL_API_BLOG}/tags`);
    Utils.setLocalStorage('tags', JSON.stringify(res.data));
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

export const blogFetchPages = () => async dispatch => {
  const res = await axios(`${URL_API_BLOG}/pages`);
  dispatch({
    type: BLOG_FETCH_PAGES,
    payload: res.data
  });
};

export const blogGetPage = (history, pageId) => async dispatch => {
  try {
    const res = await axios(`${URL_API_BLOG}/pages/${pageId}`);
    dispatch({
      type: BLOG_FETCH_PAGE,
      payload: res.data
    });
  } catch (error) {
    history.push('/404');
  }
};

export const blogSearchPosts = (query) => async dispatch => {
  const res = await axios(`${URL_API_BLOG}/posts?_embed&search=${query}`);
  dispatch({
    type: BLOG_FETCH_POSTS,
    payload: res.data
  });
}