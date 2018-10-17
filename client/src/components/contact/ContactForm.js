import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { CSRFField } from '../common';
import * as actions from '../../actions';

class ContactForm extends Component {
  componentWillMount() {
    this.props.getCSRFToken();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.onContactSubmit)}>
        <div>
          <label>First name</label>
          <Field name="firstname" component="input" type="text" />
        </div>

        <div>
          <label>Last name</label>
          <Field name="lastname" component="input" type="text" />
        </div>

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
      _csrf: utils._csrf,
    }
  };
};

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'contact',
    enableReinitialize: true
    // destroyOnUnmount: false
  })(ContactForm)
);