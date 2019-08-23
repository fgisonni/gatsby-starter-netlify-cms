import React from 'react'
import PropTypes from 'prop-types'
import { QuickStartGuidesTemplate } from '../../templates/quick-start-guides-post'

const QuickStartGuidesPreview = ({ entry, widgetFor }) => (
  <QuickStartGuidesTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

QuickStartGuidesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default QuickStartGuidesPreview
