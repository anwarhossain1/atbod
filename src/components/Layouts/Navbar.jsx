import React, { Component } from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu>
            <Menu.Item style={{float: 'left'}}>Logo</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Services</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Industries</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Insights</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Explore more about Atbod</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Market place</Menu.Item>
            <Menu.Item style={{float: 'right'}}>contries</Menu.Item>
            <Menu.Item style={{float: 'right'}}>Sign in</Menu.Item>

            
        </Menu>
      </div>
    );
  }
}
