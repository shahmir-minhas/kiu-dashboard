import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResultCard from "./ResultCard";

import "../../Styles/Pages/_studentDetails.scss";

const StudentDetails = (props) => {
  return (
    <React.Fragment>
      <div className="student-details-wrapper">
        <Link to="/studying-students">Back</Link>
        <div className="card-student-info">
          <div className="d-flex justify-content-between border-bottom pb-2">
            <div>
              <p className="email mt-1">demo@gmail.com</p>
              <h6>
                Student <span>John Doe</span>
              </h6>
              <p className="pt-1">ID-123</p>
            </div>
            <div className="d-flex right-flex">
              <div className="px-5">
                <span>Scholarship</span>
                <p>Sibling Concession</p>
              </div>
              <div className="vertical-line border"></div>
              <div className="px-5">
                <span>Semester</span>
                <p>1st</p>
              </div>
              <div className="vertical-line border"></div>
              <div className="px-5">
                <span>CGPA</span>
                <p>3.64</p>
              </div>
              <div className="vertical-line border"></div>
            </div>
          </div>
          <div className="d-flex justify-content-between bottom-line">
            <p>
              <span>College:</span> College of Religion and Quranic Studies
            </p>
            <p>
              <span>Department:</span> Quranic Studies
            </p>
            <p>
              <span>Major:</span> Tafseer
            </p>
          </div>
        </div>
        {/* 
              Result card  
        */}
        <ResultCard />
      </div>
    </React.Fragment>
  );
};

export default StudentDetails;
