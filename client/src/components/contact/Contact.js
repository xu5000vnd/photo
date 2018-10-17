import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  onContactSubmit = (values) => {
    console.log(values); 
  }

  render() {
    return (
      <div>
        <ContactForm onContactSubmit={(values) => this.onContactSubmit(values)}/>
      </div>
    );
  }
}

export default (Contact);