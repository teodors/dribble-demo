import React, { Component, PropTypes } from 'react'
import Overlay from '../components/Overlay'
import { connect } from 'react-redux'
import { updateDisplayMode } from '../actions/shotDetail'

const mapStateToProps = (state, ownProps) => {
  const { displayMode } = state
  const shouldHide = displayMode != 'detail'
  return { shouldHide }
}

class ShotOverlay extends Component {
  constructor(props) {
    super(props)
    this.updateDisplay = this.updateDisplay.bind(this)
  }

  // disable scroll in body element.
  componentWillReceiveProps(nextProps) {
    const { shouldHide } = nextProps
    let body = document.getElementsByTagName('body')[0]

    body.style.overflow = shouldHide ? 'auto' : 'hidden'
  }


  updateDisplay() {
    const { updateDisplayMode } = this.props
    updateDisplayMode('list')
  }

  render() {
    const { updateDisplay, props: { shouldHide, children } } = this

    return (
      <Overlay
        className={shouldHide ? 'overlay hide' : 'overlay'}
        onClose={updateDisplay}
        children={children}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { updateDisplayMode }
)(ShotOverlay)