import React from 'react'
import PropTypes from 'prop-types'
import { WeeklyMealPlan } from '../../templates/weekly-meal-plan-post'

const WeeklyMealPlanPreview = ({ entry, widgetFor }) => (
  <WeeklyMealPlan
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

WeeklyMealPlanPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WeeklyMealPlanPreview
