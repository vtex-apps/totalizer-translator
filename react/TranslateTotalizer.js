import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

const TranslateTotal = ({ intl, id }) => {
  if (!id) return ''

  const text = intl.formatMessage({
    id: `totalizers.${id}`,
    defaultMessage: id,
  })

  return <Fragment>{text}</Fragment>
}

TranslateTotal.propTypes = {
  intl: intlShape,
  id: PropTypes.string.isRequired,
}

export default injectIntl(TranslateTotal)
