import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class CategoryMenu extends Component {
  componentWillMount() {
    const { blogFetchCategories, blogFetchTags } = this.props;
    blogFetchCategories();
    blogFetchTags();
  }

  renderCategories = () => {
    const { categories } = this.props;

    const renderSubCate = (parentId) => {
      return (
        <ul>
          {
            _.map(categories, category => {
              if (category.parent === parentId) {
                return (
                  <li key={category.id}>
                    <span>
                      <Link to={`/blog/categories/${category.id}/${category.slug}`}>{category.name}</Link>
                    </span>
                  </li>
                );
              }
            })
          }
        </ul>
      );
    }

    return _.map(categories, category => {
      if (category.parent === 0) {
        return (
          <li key={category.id}>
            <span>
              <Link to={`/blog/categories/${category.id}/${category.slug}`}>{category.name}</Link>
            </span>
            {renderSubCate(category.id)}
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { categories: blogs.categories };
}

export default connect(mapStateToProps, actions)(CategoryMenu);