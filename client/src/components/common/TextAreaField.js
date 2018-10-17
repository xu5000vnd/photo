import React from 'react';

const TextAreaField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea style={{ marginBottom: '5px' }} {...input} ></textarea>
      <div className="red-text" style={{ marginBottom: '20px' }}>{touched && error}</div>
    </div>
  );
};

export { TextAreaField };