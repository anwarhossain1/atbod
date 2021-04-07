import React, { Component } from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu style={{paddingLeft:100}}>
            <Menu.Item style={{float: 'left'}}>Logo</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Services</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Industries</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Insights</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Explore more about Atbod</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Market place</Menu.Item>
            <Menu.Item style={{float: 'right'}}>contries</Menu.Item>
            <Menu.Item style={{float: 'right'}}>Sign in</Menu.Item>

            
        </Menu>
        <Menu style={{paddingLeft:90,background:"#e9ecef"}}>
            <Menu.Item style={{float: 'left',paddingLeft:50}}>Implement smarter business systems</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Consult with us</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Turn Your Ideas Into Reality</Menu.Item>
            <Menu.Item style={{float: 'left'}}>Connect with Us</Menu.Item>
           

            
        </Menu>
      </div>
    );
  }
}
