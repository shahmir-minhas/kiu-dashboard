import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Logo from "../Assets/kiu_logo.png";
import HomeIcon from "../Assets/Icons/Icon material-home.svg";
import GraduationCap from "../Assets/Icons/graduation-cap-svgrepo-com.svg";
import StdGraCap from "../Assets/Icons/student-with-graduation-cap.svg";
import AcademicCalinder from "../Assets/Icons/spellcheck-24px.svg";
import MailBox from "../Assets/Icons/Icon material-mail.svg";
import Profile from "../Assets/Icons/profile.png";
import Logout from "../Assets/Icons/Icon open-account-logout.png";

import "../Styles/Pages/_layout.scss";

const Layout = (props) => {
  const sidebarLinks = [
    { icon: HomeIcon, title: "Dashboard", url: "/" },
    {
      icon: GraduationCap,
      title: "Studying Students",
      url: "/studying-students",
    },
    { icon: StdGraCap, title: "Features", url: "/graduate-students" },
    {
      icon: AcademicCalinder,
      title: "Academic Calendar",
      url: "/academic-calendar",
    },
    { icon: MailBox, title: "Mail Box", url: "/mail-box" },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Item </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/">Item </Link>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key="3">
        <Link to="/">Item </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <nav className="d-flex layout-wrapper">
        <aside className="sidebar">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="list-unstyled">
              {sidebarLinks.map((link) => {
                return (
                  <li key={link.title} className="">
                    <NavLink className="sibar-link-btn" to={link.url}>
                      <span className="me-2">
                        <img src={link.icon} alt="" />
                      </span>
                      {link.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="">
          <div className="top-bar d-flex justify-content-between flex-grow-1">
            <div className="d-flex">
              <img src={Profile} alt="" className="me-2" />
              <h5 className="me-5">Hi, Shahmir!</h5>
              <div className="">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    //   onClick={(e) => e.preventDefault()}
                  >
                    English <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div>
              <span className="me-2">
                <img src={Logout} alt="" />
              </span>
              logout
            </div>
          </div>
        </div>
      </nav>

      {/* layout wrapper ends */}
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
