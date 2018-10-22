import axios from 'axios';

export const contactSendMail = (values, history) => async dispatch => {
  const res = await axios.post('/contact/sendmail', values);
  // if (res.data.status) {
  //   history.push('/thankyou');
  // } else {
  //   history.push('/');
  // }
};
