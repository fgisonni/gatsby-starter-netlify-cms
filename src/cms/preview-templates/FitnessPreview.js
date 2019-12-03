import React from 'react'
import PropTypes from 'prop-types'
import { FitnessTemplate } from '../../templates/fitness-post'

const FitnessPreview = ({ entry, widgetFor }) => (
  <FitnessTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

FitnessPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default FitnessPreview
