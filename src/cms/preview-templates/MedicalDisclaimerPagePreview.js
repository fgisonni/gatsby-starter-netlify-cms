import React from 'react'
import PropTypes from 'prop-types'
import { MedicalDisclaimerPageTemplate } from '../../templates/medical-disclaimer-page'

const MedicalDisclaimerPagePreview = ({ entry, widgetFor }) => (
  <MedicalDisclaimerPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MedicalDisclaimerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MedicalDisclaimerPagePreview
