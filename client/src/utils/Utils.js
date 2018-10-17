import _ from 'lodash';

const validateEmail = (email) => {
  var re = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')
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

export {
  validateForm
};