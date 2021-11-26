import React, { Component } from "react";

import "../../Styles/Pages/_academicCalendar.scss";
import { Table } from "antd";

const AcademicCalendar = () => {
  return (
    <React.Fragment>
      <div className="academic-calendar-wrapper">
        <div className="card-calender">
          <h6>Academic calendar</h6>
          <p>Semester dates for the year 2021</p>

          <div className="d-flex justify-content-lg-between w-47-p border-bottom py-2 mt-4">
            <p>Semester start date</p>
            <p>12/05/2021</p>
          </div>
          <div className="d-flex justify-content-lg-between w-47-p py-2">
            <p>Semester end date</p>
            <p>12/02/2021</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AcademicCalendar;
