import React from 'react'
import { AuthConsumer, } from '../provider/AuthProvider'
import { Button, Form, Segment, Header, } from 'semantic-ui-react'



class Login extends React.Component {
  state = { email: '', password: '', }

  handleSubmit = (e) => {

    console.log("handleSubmit")
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
    console.log("handleChange")
  }

  render() {
    const { email, password, } = this.state;


    return (
      <Segment basic>
        <Header textAlign="center" as="h1"> Login </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
            label="email"
            required
            autoFocus
            placeholder="email"
            name="email"
            value={email}
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
            </Form.Group>
            <Segment basic textAlign="right">
              <Button inverted color='blue' type="submit">Submit</Button>
            </Segment>
        </Form>
     </Segment>
    )
  }
}

export default Login
