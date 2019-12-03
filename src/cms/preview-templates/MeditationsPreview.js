import React from 'react'
import PropTypes from 'prop-types'
import { MeditationsTemplate } from '../../templates/meditations-post'

const MeditationsPreview = ({ entry, widgetFor }) => (
  <MeditationsTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

MeditationsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default MeditationsPreview
