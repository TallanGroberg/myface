import React from "react"
import { Menu, } from "semantic-ui-react"
import styled from "styled-components"
import { Link, } from 'react-router-dom'


const Navbar = () => (
  <>
    <NavStyle>
      <Margin>
        <Link  to='/'>Home   |</Link>
        <Link  to='/about'>|   About   |</Link>
        <Link to='/login'>|   Login |</Link>
        <Link to='/register'>|   Register |</Link>
        </Margin>


        </NavStyle>



  </>
)


const NavStyle = styled.div`

display: flex;
justify-content: display-evenly;
justify-content: right;
font-size: 1em;
font-weight:
border: 2px solid black;
box-shadow: 14px 3px 14px 16px rgba(0,0,0,0.84);
background-image: linear-gradient(to bottom right,  rgb(169, 249, 121, 0.68), rgb(60, 107, 3));

`;


const Margin = styled.div`

display: flex;
color: black;

margin-left: 5px

`;





export default Navbar;
