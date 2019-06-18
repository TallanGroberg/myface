import React from "react"
import { Menu, } from "semantic-ui-react"
import styled from "styled-components"
import { AuthConsumer, } from '../provider/AuthProvider'
import { Link, withRouter, } from 'react-router-dom'


class Navbar extends React.Component {


  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
            />


        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name= 'login'
              active={location.pathname === '/login'}
              />
          </Link>
          <Link to="/register">
            <Menu.Item
              id='register'
              name="register"
              active={location.pathname === "/register"}


              />

          </Link>


        </Menu.Menu>
      )
    }
  }



  render() {
    return (
      <NavStyle>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            name='home'
            id="home"
            active={this.props.location.pathname === '/'}
             />
        </Link>
        { this.rightNavItems() }
      </Menu>
    </NavStyle>


    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
          {
            auth => <Navbar { ...this.props} auth={auth} />
          }
      </AuthConsumer>
    )
  }
};

export default withRouter(ConnectedNavbar);

const NavStyle = styled.div`


box-shadow: 14px 3px 14px 16px rgba(0,0,0,0.84);
background-image: linear-gradient(to bottom right,  rgb(169, 249, 121, 0.68), rgb(60, 107, 3));

`;


const Margin = styled.div`

display: flex;
color: black;

margin-left: 5px

`;
