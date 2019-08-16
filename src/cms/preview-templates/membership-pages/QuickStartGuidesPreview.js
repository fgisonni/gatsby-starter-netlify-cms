import React from 'react'
import PropTypes from 'prop-types'
import { QuickStartGuidesTemplate } from '../../templates/quick-start-guides'

const QuickStartGuidesPreview = ({ entry, widgetFor }) => (
  <QuickStartGuidesTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
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
