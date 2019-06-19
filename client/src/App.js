import React from 'react';
import { Header, Container, } from "semantic-ui-react"
import styled from 'styled-components'
import { Route, Switch, } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

import Login from './components/Login'
import NoMatch from './components/NoMatch'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import AuthProvider from './provider/AuthProvider'
import MyCats from './components/MyCats'
import DownVote from './components/DownVote'


const App = () =>{

  return (
    <>
    <Navbar />

      <FetchUser>
        <AppStyles>
        <ComponentStyles>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path='/my_cats' component={MyCats} />
            <ProtectedRoute exact path='/down_vote' component={DownVote} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </ComponentStyles>
        </AppStyles>
      </FetchUser>
    </>
  );
}

const AppStyles = styled.div`
  margin: 25px;
  border: 5px;
  border-radius: 5px;
  border-style: outset;
  box-shadow: 19px 32px 25px 12px rgba(0,0,0,0.84);
  background-image: linear-gradient(to bottom right,  rgb(169, 249, 121), rgb(60, 107, 2));
  font-family: Arial, Helvetica, sans-serif;
`;

const ComponentStyles = styled.div`
  margin-left: 10px
`;

export default App;
