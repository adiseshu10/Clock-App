import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isShow: false,
  }

  onToggleClock = () => {
    this.setState(prevState => {
      const {isShow} = prevState
      return {
        isShow: !isShow,
      }
    })
  }

  render() {
    const {isShow} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {isShow ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShow && <Clock />}
      </div>
    )
  }
}

export default App
