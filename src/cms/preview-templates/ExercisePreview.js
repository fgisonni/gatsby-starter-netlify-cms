import React from 'react'
import PropTypes from 'prop-types'
import { ExerciseTemplate } from '../../templates/exercise-post'

const ExercisePreview = ({ entry, widgetFor }) => (
  <ExerciseTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ExercisePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default ExercisePreview
