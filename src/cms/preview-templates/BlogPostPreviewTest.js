import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplateTest } from '../../templates/test-post'

const BlogPostPreviewTest = ({ entry, widgetFor }) => (
  <BlogPostTemplateTest
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreviewTest.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreviewTest
