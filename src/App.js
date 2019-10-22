import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import TeamsListContainer from './components/TeamsListContainer'
import CreatTeamFormContainer from './components/CreatTeamFormContainer'
import TeamDetailsContainer from './components/TeamDetailsContainer'
import LoginFormContainer from './components/LoginFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={TeamsListContainer} />
          <Route path='/' exact component={CreatTeamFormContainer}/>
          <Route path='/teams/:id' component={TeamDetailsContainer}/>
          <Route path='/login' component={LoginFormContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App