import React from 'react';
import { Field } from 'redux-form';

const CSRFField = () => {
  return (
    <Field component="input" name="_csrf" type="hidden" />
  );
};

export { CSRFField };