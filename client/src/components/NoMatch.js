import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    Page not found return
    <Link to="/"> <h1>Home</h1></Link>
  </Header>
)

export default NoMatch;
