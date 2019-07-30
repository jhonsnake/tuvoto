import React, { Component } from "react";
import { Modal } from "antd";
import Logo from "../statics/img/tuvoto.png";
import GoogleAuth from "./GoogleAuth";

export default class LoginForm extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <p type="primary" onClick={this.showModal}>
          Iniciar Sesión
        </p>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ textAlign: "center" }}>
            <img
              className="logo"
              src={Logo}
              alt=""
              style={{ width: "100px", margin: "10px", marginLeft: "15px" }}
            />
          </div>

          <GoogleAuth />
        </Modal>
      </div>
    );
  }
}
