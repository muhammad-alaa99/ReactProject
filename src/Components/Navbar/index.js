import React, { Component } from "react";
import {
  NavBar,
  Navlink,
  Icon,
  List,
  UlList,
  Label,
  Input,
  Media,
  List2,
  Ul
} from "./style";
export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <div className="logo">
            <a href="/">
              <Icon className="fa fa-user-circle-o fa-1x"></Icon>
            </a>
          </div>
          <UlList>
            <List>
              <Navlink to="/">Home</Navlink>
            </List>
            <List>
              <Navlink to="/about">About</Navlink>
            </List>
            <List>
              <Navlink to="/portfolio">Portfolio</Navlink>
            </List>
            <List>
              <Navlink to="/work">Work</Navlink>
            </List>
            <List>
              <Navlink to="/contact">contact</Navlink>
            </List>
          </UlList>
        </NavBar>
        <Media>
          <Input type="checkbox" id="nav" />
          <Label for="nav"></Label>
          <Ul className="medai">
            <List2>
              <Navlink to="/">Home</Navlink>
            </List2>
            <List2>
              <Navlink to="/about">About</Navlink>
            </List2>
            <List2>
              <Navlink to="/portfolio">Portfolio</Navlink>
            </List2>
            <List2>
              <Navlink to="/work">Work</Navlink>
            </List2>
            <List2>
              <Navlink to="/contact">contact</Navlink>
            </List2>
          </Ul>
        </Media>
      </div>
    );
  }
}
