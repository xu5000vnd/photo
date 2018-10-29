import React, { Component } from 'react';

class Thankyou extends Component {
  componentDidMount() {
    document.title = window.siteName + " | Thank you";
  }

  render() {
    return (
      <div>
        Thank you for sending contact to me. I will respond as soon as possible!!
      </div>
    );
  }
}

export default Thankyou;