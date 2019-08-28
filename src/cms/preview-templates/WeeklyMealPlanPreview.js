import React from 'react'
import PropTypes from 'prop-types'
import { WeeklyMealPlanTemplate } from '../../templates/weekly-meal-plans-post'

const WeeklyMealPlanPreview = ({ entry, widgetFor }) => (
  <WeeklyMealPlanTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}

    monday={entry.getIn(['data', 'monday'])}
    tuesday={entry.getIn(['data', 'tuesday'])}
    wednesday={entry.getIn(['data', 'wednesday'])}
    thursday={entry.getIn(['data', 'thursday'])}
    friday={entry.getIn(['data', 'friday'])}
    saturday={entry.getIn(['data', 'saturday'])}
    sunday={entry.getIn(['data', 'sunday'])}


  />
)

WeeklyMealPlanPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WeeklyMealPlanPreview
