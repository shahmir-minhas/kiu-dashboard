import React, { Component } from "react";

import { Button, Input, Select, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import KiuLogo from "../../Assets/kiu_logo.png";
import { ReactComponent as UserIcon } from "../../Assets/Icons/Icon metro-user.svg";
import { ReactComponent as LockIcon } from "../../Assets/Icons/Icon material-lock.svg";
// import {userContext} from "";
import "../../Styles/Pages/_login.scss";
import { Link } from "react-router-dom";

const { Option } = Select;

const Login = () => {
  const handleSignin = () => {};
  return (
    <React.Fragment>
      <div className="login-wrapper">
        <div className="text-end">
          <Select defaultValue="EN">
            <Option>EN</Option>
            <Option>AR</Option>
          </Select>
        </div>
        <div className="login-form-layout m-auto text-center">
          <img src={KiuLogo} alt="" className="logo" />
          <div className="d-flex justify-content-between align-items-center">
            <hr />
            <h5>Sponsor Portal</h5>
            <hr />
          </div>
          <div className="login-form text-start">
            <Form>
              <h6>Login</h6>
              <p>Enter your credentials to get access</p>
              <label htmlFor="">User Name</label>
              <Input
                prefix={<UserIcon />}
                className="login-input"
                placeholder="ID-123"
              />
              <label htmlFor="">Password</label>
              <Input.Password
                prefix={<LockIcon />}
                type="password"
                className="login-input"
                placeholder="Enter password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              {/* Remove Link when Login Tokens Will be created */}
              <Link to="/home">
                <Button onClick={handleSignin}>Sign In</Button>
              </Link>
            </Form>
          </div>
          <p>for any help or query contact us admindep@kiu.org</p>
        </div>
        <div className="row justify-content-center bottom-bar">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="all-right-reserved ms-5">
              All rights reserved © Knowledge international University
            </p>
          </div>
          <div className="col-4 mt-3">
            <div className="d-flex">
              <div className="mx-5">
                <p>Website</p>
                <Link>www.kiu.org</Link>
              </div>
              <div className="mx-5">
                <p>LMS Portal</p>
                <Link>www.kiu/lms.org</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
