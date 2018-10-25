import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class PageMenu extends Component {
  componentWillMount() {
    const { blogFetchPages } = this.props;
    blogFetchPages();
  }

  renderPages = () => {
    const { pages } = this.props;

    const renderSubPage = (parentId) => {
      return (
        <ul>
          {
            _.map(pages, page => {
              if (page.parent === parentId) {
                return (
                  <li key={page.id}>
                    <span>
                      <Link to={`/blog/pages/${page.id}/${page.slug}`}>{page.title.rendered}</Link>
                    </span>
                  </li>
                );
              }
            })
          }
        </ul>
      );
    }

    return _.map(pages, page => {
      if (page.parent === 0) {
        return (
          <li key={page.id}>
            <span>
              <Link to={`/blog/pages/${page.id}/${page.slug}`}>{page.title.rendered}</Link>
            </span>
            {renderSubPage(page.id)}
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Pages</h2>
        <ul>
          {this.renderPages()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { pages: blogs.pages };
}

export default connect(mapStateToProps, actions)(PageMenu);