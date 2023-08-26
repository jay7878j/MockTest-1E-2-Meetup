import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

class Meetup extends Component {
  unRegisterView = () => (
    <div>
      <h1>Welcome to Meetup</h1>
      <p>Please register for the topic</p>

      <Link to="/register">
        <button type="button" onClick={this.onRegisterClick}>
          Register
        </button>
      </Link>
    </div>
  )

  getRegisterView = topicObject => {
    const {username, topic} = topicObject

    return (
      <div>
        <h1>Hello {username}</h1>
        <p>Welcome to {topic}</p>
      </div>
    )
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {topicObject} = value
          console.log(topicObject)

          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              {topicObject.username !== undefined
                ? this.getRegisterView(topicObject)
                : this.unRegisterView()}

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Meetup
