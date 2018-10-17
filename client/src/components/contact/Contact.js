import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import * as actions from '../../actions';

class Contact extends Component {
  onContactSubmit = (values) => {
    this.props.contactSendMail(values, this.props.history); 
  }

  render() {
    return (
      <div>
        <ContactForm onContactSubmit={(values) => this.onContactSubmit(values)}/>
      </div>
    );
  }
}

export default connect(null, actions)(Contact);