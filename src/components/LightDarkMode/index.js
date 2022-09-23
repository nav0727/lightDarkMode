/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  OnDarkMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const text = isDark ? 'Dark Mode' : 'Light Mode'
    const classMode = isDark ? 'light-mode' : 'dark-mode'
    return (
      <div className="bg">
        <div className={`container ${classMode}`}>
          <h1> Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.OnDarkMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
