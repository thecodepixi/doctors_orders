import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Menu, Icon } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu color="teal">
      <Menu.Item name="home">
        <Link to={"/"}><Icon name="doctor" size="big" color="green"/></Link>
      </Menu.Item>
      <Menu.Item header><Header color="blue">Doctor's Orders</Header></Menu.Item>
      <Menu.Item name="orderForm" position="right" color="green">
        <Link to={"/orders/new"} >
          <Icon.Group size="large">
            <Icon name="clipboard outline" color="olive"/> 
            <Icon corner="bottom right" name="plus" color="green"/>
          </Icon.Group>
           Add Latest Doctor's Orders
          </Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar