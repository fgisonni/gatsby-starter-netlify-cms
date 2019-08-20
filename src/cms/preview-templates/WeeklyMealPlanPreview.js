import React from 'react'
import PropTypes from 'prop-types'
import { WeeklyMealPlanTemplate } from '../../templates/weekly-meal-plans-post'

const WeeklyMealPlanPreview = ({ entry, widgetFor }) => (
  <WeeklyMealPlanTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}

    days={entry.getIn(['data', 'days'])}
    breakfast={entry.getIn(['data', 'breakfast'])}

  />
)

WeeklyMealPlanPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WeeklyMealPlanPreview
