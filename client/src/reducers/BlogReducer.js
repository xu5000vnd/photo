import {
  BLOG_FETCH_RECENT_POSTS,
  BLOG_FETCH_CATEGORIES,
  BLOG_FETCH_POST,
  BLOG_FETCH_POSTS,
  BLOG_FETCH_TAGS,
  BLOG_FETCH_PAGES,
  BLOG_FETCH_PAGE
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  posts: [],
  postDetail: {},
  tags: [],
  pages: [],
  pageDetail: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOG_FETCH_RECENT_POSTS:
      return { ...state, posts: action.payload };
    case BLOG_FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case BLOG_FETCH_TAGS:
      return { ...state, tags: action.payload };
    case BLOG_FETCH_POST:
      return { ...state, postDetail: action.payload };
    case BLOG_FETCH_POSTS:
      return { ...state, posts: action.payload };
    case BLOG_FETCH_PAGES:
      return { ...state, pages: action.payload };
    case BLOG_FETCH_PAGE:
      return { ...state, pageDetail: action.payload };
    default:
      return state;
  }
};