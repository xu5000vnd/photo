import {
  BLOG_FETCH_RECENT_POSTS,
  BLOG_FETCH_CATEGORIES,
  BLOG_FETCH_POST
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  posts: [],
  postDetail: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOG_FETCH_RECENT_POSTS:
      return { ...state, posts: action.payload };
    case BLOG_FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case BLOG_FETCH_POST:
      return { ...state, postDetail: action.payload };
    default:
      return state;
  }
};