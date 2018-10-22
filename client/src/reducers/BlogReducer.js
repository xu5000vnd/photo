import { BLOG_FETCH_RECENT_POSTS, BLOG_FETCH_CATEGORIES } from '../actions/types';

const INITIAL_STATE = {
  categories: {},
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOG_FETCH_RECENT_POSTS:
      return { ...state, posts: action.payload };
    case BLOG_FETCH_CATEGORIES:
      return { ...state };
    default:
      return state;
  }
};