import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import Slider from 'react-slick'

import './index.css'
import onBoard1 from 'assets/onBoard1.svg'
import onBoard2 from 'assets/onBoard2.svg'
import onBoard3 from 'assets/onBoard3.svg'

import { initConnect } from 'core/onBoard/actions'


const id = 'section-onBoard'
const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  beforeChange: this.syncPagination
}

const extendWithProps = () => ({
  ids: {
    root: id,
    slider: `${id}__slider`
  },
  styleSheet: {
    root: {
      height: 100
    }
  }
})

class OnBoard extends Component {
  render() {
    const {
      ids,
      styleSheet,
      initConnect
    } = this.props

    return (
      <div id={ids.root} style={styleSheet.root}>
        <Slider {...sliderSettings}>
          <div className="step">
            <img src={onBoard1} className="onBoardIcon" alt="onBoard1" />
            <div className="paragraph">
              <h2>Thank you.</h2>
              <p>For joining us tonight at UX people of Stockholm.</p>
            </div>
          </div>
          <div className="step">
            <img src={onBoard2} className="onBoardIcon" alt="onBoard2" />
            <div className="paragraph">
              <h2>Paticipate.</h2>
              <p>By answering the upcoming questions on your device.</p>
            </div>
          </div>
          <div className="step">
            <img src={onBoard3} className="onBoardIcon" alt="onBoard3" />
            <div className="paragraph">
              <h2>Rate me.</h2>
              <p>I'd love to hear your feedback about the talk later on.</p>
              <a onClick={initConnect} className="btn yellow">Join the talk</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    initConnect: () => dispatch(initConnect())
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compose(
  withProps(extendWithProps)
)(OnBoard))