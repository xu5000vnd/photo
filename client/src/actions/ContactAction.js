import { CONTACT_SEND_MAIL } from './types';

export const contactSendMail = (values) => dispatch => {
  console.log('contactSendMail');
  console.log(values);
  dispatch({
    type: CONTACT_SEND_MAIL,
    payload: {}
  });
};
