import React, { Component } from "react";
import Logo from "../statics/img/tuvoto.png";
import { Layout, Menu, Icon } from "antd";
import LoginForm from "./LoginFormComponent";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 760) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: false });
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="light"
        >
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <div style={{ textAlign: "center" }}>
              <img
                className="logo"
                src={Logo}
                alt=""
                style={{ width: "70px", margin: "10px" }}
              />
            </div>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>Usuario</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <LoginForm />
              </Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    );
  }
}
