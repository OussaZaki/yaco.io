import React from 'react'
import { connect } from 'react-redux'

import { getLayoutComponents } from './layout/selectors'

function ApplicationContainer (props) {
  return (
    <div>{props.layout}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    layout: getLayoutComponents(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  // something
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationContainer)
