import React, { Component } from "react";
import { Menu, Button, Dropdown } from "antd";
import img1 from "../../images/logo.png";
import img2 from "../../images/search.png";
import img3 from "../../images/usa.png";
import img4 from "../../images/arrow-down.png";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu style={{ paddingLeft: 100 }}>
          <Menu.Item style={{ float: "left" }}>
            <img width="70px" height="40px" src={img1} />
          </Menu.Item>
          <Menu.Item style={{ float: "left" }}>Services</Menu.Item>
          <Menu.Item style={{ float: "left" }}>Industries</Menu.Item>
          <Menu.Item style={{ float: "left" }}>Insights</Menu.Item>
          <Menu.Item style={{ float: "left" }}>
            Explore more about Atbod
          </Menu.Item>
          <Menu.Item
            style={{ float: "left", opacity: "1", backgroundColor: "#279212" }}
          >
            Market place
          </Menu.Item>
          <Menu.Item style={{ float: "left" }}>
            <button style={{ backgroundColor: "#27AAE1", height: "40px" }}>
              <img height="20px" style={{ paddingBottom: "4px" }} src={img2} />
            </button>
          </Menu.Item>
          <div style={{ float: "right" }}><Dropdown   overlay={menu}>
            <Button style={{height:"50px"}}><img src={img3}/><img src={img4}/></Button>
          </Dropdown></div>
          <Menu.Item style={{ float: "right" }}>Sign in</Menu.Item>
        </Menu>
        <Menu style={{ paddingLeft: 40, background: "#e9ecef" }}>
          <Menu.Item style={{ float: "left", paddingLeft: 35 }}>
            Implement smarter business systems
          </Menu.Item>
          <Menu.Item style={{ float: "left" }}>Consult with us</Menu.Item>
          <Menu.Item style={{ float: "left" }}>
            Turn Your Ideas Into Reality
          </Menu.Item>
          <Menu.Item style={{ float: "left" }}>Connect with Us</Menu.Item>
        </Menu>
      </div>
    );
  }
}
