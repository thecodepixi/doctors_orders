import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item name="home">
        <Link to={"/"}><Icon name="doctor" size="big"/></Link>
      </Menu.Item>
      <Menu.Item name="orderForm" position="right">
        <Link to={"/orders/new"} >
          <Icon.Group size="large">
            <Icon name="clipboard outline"/> 
            <Icon corner="bottom right" name="plus"/>
          </Icon.Group>
           Add Latest Doctor's Orders
          </Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar