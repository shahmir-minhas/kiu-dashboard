import React, { Component } from "react";

import "../../Styles/Pages/_login.scss";
import { Button, Input } from "antd";

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-wrapper">
        <div className="login-form-layout m-auto">
          <img src="" alt="" />
          <div className="d-flex justify-content-between align-items-center">
            <hr />
            <h5>Sponsor Portal</h5>
            <hr />
          </div>
          <div className="login-form">
            <p>Login</p>
            <p>Enter your credentials to get access</p>
            <label htmlFor="">User Name</label>
            <Input />
            <label htmlFor="" type="password">
              Password
            </label>
            <Input />
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
