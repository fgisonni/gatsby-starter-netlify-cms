import React from 'react'
import PropTypes from 'prop-types'
import { RecipesPostTemplate } from '../../templates/recipes-post'

const RecipesPostPreview = ({ entry, widgetFor }) => (
  <RecipesPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

RecipesPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default RecipesPostPreview
