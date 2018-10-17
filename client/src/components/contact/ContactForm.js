import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { CSRFField } from '../common';
import * as actions from '../../actions';
import { InputField, TextAreaField } from '../common';
import FIELD_LIST from './ContactFieldList';
import * as Utils from '../../utils/Utils';

class ContactForm extends Component {
  componentWillMount() {
    this.props.getCSRFToken();
  }

  renderForm = () => {
    return _.map(FIELD_LIST, ({ name, label, type }) => {
      if (type === 'textarea') {
        return <Field key={name} label={label} name={name} type={type} component={TextAreaField} />;
      } else {
        return <Field key={name} label={label} name={name} type={type} component={InputField} />;
      }
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form id="contact-form" onSubmit={handleSubmit(this.props.onContactSubmit)}>
        {this.renderForm()}
        <CSRFField />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ utils }) => {
  return {
    initialValues: {
      _csrf: utils._csrf
    }
  };
};

function validate(values) {
  return Utils.validateForm(FIELD_LIST, values);
}

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'contact',
    enableReinitialize: true,
    validate: validate
    // destroyOnUnmount: false
  })(ContactForm)
);