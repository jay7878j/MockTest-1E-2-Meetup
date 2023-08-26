import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import RegisterForm from './components/RegisterForm'
import NotFound from './components/NotFound'
import Meetup from './components/Meetup'
import RegisterContext from './context/RegisterContext'

class App extends Component {
  state = {
    topicObject: {},
  }

  setTopicObject = value => {
    this.setState({
      topicObject: value,
    })
  }

  render() {
    const {topicObject} = this.state

    return (
      <RegisterContext.Provider
        value={{
          topicObject,
          setUsername: this.setTopicObject,
        }}
      >
        <Switch>
          <Route exact path="/" component={Meetup} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App
