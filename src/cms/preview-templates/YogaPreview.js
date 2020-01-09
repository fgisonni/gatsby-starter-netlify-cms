import React from 'react'
import PropTypes from 'prop-types'
import { YogaTemplate } from '../../templates/yoga-post'

const YogaPreview = ({ entry, widgetFor }) => (
  <YogaTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

YogaPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default YogaPreview
