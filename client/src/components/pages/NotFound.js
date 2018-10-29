import React, { Component } from 'react';

class NotFound extends Component {
  componentDidMount() {
    document.title = window.siteName + " | Not Found";
  }

  render() {
    return (
      <div>
        Page 404!
      </div>
    );
  }
}

export default NotFound;