import React, { Component } from "react";
import { Button } from "antd";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "145342938096-7u0a704vccur7gnum44958t9gspea49j.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} type="primary " block>
          Cerrar Sesión
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} type="primary " block>
          Iniciar Sesión
        </Button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
