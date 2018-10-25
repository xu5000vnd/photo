import React, { Component } from 'react';

class SearchForm extends Component {
  state = { query: '' };

  search = () => {
    if (this.state.query) {
      this.props.history.push(`/blog/search/${this.state.query}`);
    }
  };

  render() {
    return (
      <form method="get" action="/blog/search">
        <input
          name="query"
          type="text"
          value={this.state.query}
          onChange={(event) => this.setState({ query: event.target.value })} />
        <button type="button" onClick={this.search}>Search</button>
      </form>
    );
  }
}

export { SearchForm };

