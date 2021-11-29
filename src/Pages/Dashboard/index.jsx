import React, { Component } from "react";
import { Table } from "antd";
import { ReactComponent as Student } from "../../Assets/Icons/graduated.svg";
import { ReactComponent as Dollar } from "../../Assets/Icons/dollar-symbol.svg";
import { ReactComponent as SaveMoney } from "../../Assets/Icons/save-money.svg";

import "../../Styles/Pages/_dashboard.scss";

const Index = () => {
  // data for columns in table
  const dataSource = [
    {
      key: "1",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "2",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "3",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "4",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "4",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "4",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
    {
      key: "4",
      program: "Demo",
      student: 15,
      totalAmount: "1,243,254",
      amountSpent: "132,654",
    },
  ];
  // columns in table
  const columns = [
    {
      title: "Program",
      dataIndex: "program",
      key: "program",
      align: "center",
    },
    {
      title: "Student",
      dataIndex: "student",
      key: "student",
      align: "center",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      align: "center",
    },
    {
      title: "Amount Spent",
      dataIndex: "amountSpent",
      key: "amountSpent",
      align: "center",
    },
  ];

  return (
    <React.Fragment>
      <div className="dashboard-wrapper">
        {/* <div className="d-flex justify-content-between"> */}
        <div className="row">
          <div className="col-8 col-xxl-9">
            <h6>Dashboard</h6>
            {/* <div className="d-flex justify-content-between"> */}
            <div className="row">
              <div className="col-4 card-student">
                <h6>Students</h6>
                <div className="d-flex justify-content-around">
                  <Student className="ms-4 mt-3" />
                  <div className="me-5">
                    <p>258</p>
                    <span>Total</span>
                  </div>
                </div>
              </div>
              <div className="col card-amount">
                <h6>Amount</h6>
                <div className="d-flex justify-content-around">
                  <div className="d-flex">
                    <Dollar className="me-4 mt-3" />
                    <div>
                      <p>259930</p>
                      <span>Total</span>
                    </div>
                  </div>
                  <div className="vertical-line"></div>
                  <div className="d-flex">
                    <SaveMoney className="me-4 mt-3" />
                    <div>
                      <p>259930</p>
                      <span>Total</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
                CHARTS
            */}
            <div className="row mt-3">
              <div className="col chart">
                <div className="d-flex justify-content-between">
                  <h6>Amount spent Yearly / Semester</h6>
                  <div className="d-flex justify-content-between">
                    <p className="me-5">
                      <span className="green-circle d-inline-block rounded-circle me-2"></span>
                      Fall
                    </p>
                    <p>
                      <span className="blue-circle d-inline-block rounded-circle me-2"></span>
                      Spring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col bar-chart">
                <div className="d-flex justify-content-between">
                  <h6>Revenue From Top 10 Countries</h6>
                  <div className="d-flex justify-content-between align-baseline">
                    <a href="/" className="me-5">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*   
                RIGHT SIDE PANEL 
          */}
          <div className="col-4 col-xxl-3">
            <div className="card-scholarship">
              <h6>Scholarship Program</h6>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ y: 125 }}
              />
            </div>
            <div className="card-colleges">
              <h6>Colleges</h6>
           
            </div>
            <div className="card-gender">
              <h6>Gender Propotion</h6>
            
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
