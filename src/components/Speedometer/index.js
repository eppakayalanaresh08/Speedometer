import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preState => ({speed: preState.speed + 10}))
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preState => ({speed: preState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-Container">
        <div className="speed-container">
          <h1 className="heading-Meter">SPEEDOMETER</h1>
          <img
            className="image-speed"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="heading-increase-speed">Speed is {speed}mph</h1>
          <p className="paragraph-speed">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="button-container">
            <button
              className="button-Accelerate button"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="button-Brake button"
              type="button"
              onClick={this.onDecrease}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
