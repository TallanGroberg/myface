import React from "react"
import { AuthConsumer, } from '../provider/AuthProvider';
import { Button, Segment, Header, Form, } from 'semantic-ui-react';



class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', }


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if ( password === passwordConfirmation )
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
    alert("passwords don't match")

  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })

    console.log("handleChange")
  }


  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (


        <Segment basic>
          <Header as="h1" textAlign="center">Register</Header>
            <Form onSubmit={this.handleSubmit}>

              <Form.Input
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                placeholder="Enter Email"
                onChange={this.handleChange}

              />

              <Form.Input
                label="password"
                required
                autoFocus
                name='password'
                type="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
                />
              <Form.Input
                label="Confirm password"
                required
                autoFocus
                name="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <Segment basic textAlign="right">
                <Button inverted primary type="submit">Submit</Button>
              </Segment>
            </Form>

        </Segment>


    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props } auth={auth} />}
      </AuthConsumer>
    )
  }
};
