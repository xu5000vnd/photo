import _ from 'lodash';
require('date-utils');

const validateEmail = (email) => {
  let re = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')
  return !re.test(email);
};

const validateForm = (FIELD_LIST, values) => {
  const errors = {};

  _.each(FIELD_LIST, ({ validates, name }) => {
    let errorVal = true;
    if (typeof (validates) !== 'undefined') {
      if (!values[name] && errorVal) {
        errors[name] = validates.required;
        errorVal = false;
      } else if (
        validates.email
        && validateEmail(values[name])
        && errorVal
      ) {
        errors[name] = validates.email;
        errorVal = false;
      }
    }
  });

  return errors;
}

const dateFormat = (date, format) => {
  format = format || 'DD/MM/YYYY';
  return date.toFormat(format);
}

const setCookie = (name, value) => {
  const date = new Date(_.now() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires;
}

const getCookie = (name) => {
  name = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export {
  validateForm,
  dateFormat,
  setCookie,
  getCookie
};