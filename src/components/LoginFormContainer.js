import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { Redirect } from 'react-router'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return !this.props.token ? <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    /> : <Redirect to='/'/>
  }
}
const mapStateToProps = (state) => {
    return {token: state.auth}
}

export default connect(mapStateToProps, { login })(LoginFormContainer)