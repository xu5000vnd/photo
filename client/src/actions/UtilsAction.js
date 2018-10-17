import axios from 'axios';
import { CSRF_TOKEN } from './types';

export const getCSRFToken = () => async (dispatch) => {
  const token = await axios('/getcsrftoken');
  dispatch({
    type: CSRF_TOKEN,
    payload: token.data._csrf
  });
};
