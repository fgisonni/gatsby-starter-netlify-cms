import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/idnex-page'

const IndexPagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
