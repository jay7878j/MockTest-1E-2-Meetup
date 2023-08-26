import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterForm extends Component {
  state = {
    activeTopic: topicsList[0].id,
    username: '',
    isError: false,
  }

  checkValidation = () => {
    this.setState({isError: true})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onTopicChange = event => {
    this.setState({activeTopic: event.target.value})
  }

  render() {
    const {activeTopic, username, isError} = this.state

    // console.log(this.props)

    return (
      <RegisterContext.Consumer>
        {value => {
          const {setUsername} = value

          const onFormSubmit = event => {
            event.preventDefault()
            const activeText = topicsList.find(each => each.id === activeTopic)
            const topicObject = {username, topic: activeText.displayText}
            if (username === '') {
              this.checkValidation()
            } else {
              const {history} = this.props
              setUsername(topicObject)
              history.replace('/')
            }
          }

          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form onSubmit={onFormSubmit}>
                  <h1>Let us join</h1>
                  <div>
                    <label htmlFor="username">NAME</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={username}
                      id="username"
                      onChange={this.onUsername}
                    />
                  </div>
                  <label htmlFor="topic">TOPICS</label>
                  <select
                    id="topic"
                    value={activeTopic}
                    onChange={this.onTopicChange}
                  >
                    {topicsList.map(each => {
                      const {id, displayText} = each

                      return (
                        <option value={id} key={id}>
                          {displayText}
                        </option>
                      )
                    })}
                  </select>
                  <button type="submit">Register Now</button>
                  {isError && <p>Please enter your name</p>}
                </form>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default RegisterForm
