import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Table, Select, Button } from "antd";
import { ReactComponent as ExportIcon } from "../../Assets/Icons/Icon awesome-file-export-blue.svg";

import "../../Styles/Pages/_studentDetails.scss";

const { Option } = Select;

const StudentDetails = (props) => {
  // Data Source for Grade Table
  const gradeDataSource = [
    {
      key: "1",
      title: <p className="fw-600"> Grade </p>,
      gradeAplus: "95-100",
      gradeA: "90-94",
      gradeBplus: "85-89",
      gradeB: "80-84",
      gradeCplus: "75-79",
      gradeC: "70-74",
      gradeDplus: "65-69",
      gradeD: "60-64",
      gradeF: "50-54",
    },
    {
      key: "2",
      title: <p className="fw-600"> Points </p>,
      gradeAplus: "4-5",
      gradeA: "3.75-2.75",
      gradeBplus: "3.5-4.5",
      gradeB: "3-4",
      gradeCplus: "2.5-3.75",
      gradeC: "2-3",
      gradeDplus: "1.5-2.75",
      gradeD: "1-2",
      gradeF: "0-1",
    },
  ];
  // Columns for Grade Table
  const gradeColumns = [
    {
      title: <h6>Grade Scale</h6>,
      dataIndex: "title",
      key: "gradeScale",
      align: "left",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-a-plus"></div>
          <h6 className="fw-bold mt-2">A+</h6>
        </div>
      ),
      dataIndex: "gradeAplus",
      key: "gradeAplus",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-a"></div>
          <h6>A</h6>
        </div>
      ),
      dataIndex: "gradeA",
      key: "gradeA",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-b-plus"></div>
          <h6>B+</h6>
        </div>
      ),
      dataIndex: "gradeBplus",
      key: "gradeBplus",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-b"></div>
          <h6>B</h6>
        </div>
      ),
      dataIndex: "gradeB",
      key: "gradeB",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-c-plus"></div>
          <h6>C+</h6>
        </div>
      ),
      dataIndex: "gradeCplus",
      key: "gradeCplus",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-c"></div>
          <h6>C</h6>
        </div>
      ),
      dataIndex: "gradeC",
      key: "gradeC",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-d-plus"></div>
          <h6>D+</h6>
        </div>
      ),
      dataIndex: "gradeDplus",
      key: "gradeDplus",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-d"></div>
          <h6>D</h6>
        </div>
      ),
      dataIndex: "gradeD",
      key: "gradeD",
      align: "center",
    },
    {
      title: (
        <div className="d-flex flex-column align-items-center">
          <div className="grade-f"></div>
          <h6>F</h6>
        </div>
      ),
      dataIndex: "gradeF",
      key: "gradeF",
      align: "center",
    },
  ];
  // SEMESTER RESULTS DATA AND COLUMNS
  const semesterResult = [
    {
      key: "1",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
    {
      key: "2",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
    {
      key: "3",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
    {
      key: "4",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
    {
      key: "5",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
    {
      key: "6",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      created: <span>2021-01-27 15:38:31</span>,
      updated: <span>2021-01-27 15:38:31</span>,
    },
  ];
  const semesterColumns = [
    {
      title: "Course Code",
      dataIndex: "courseCode",
      key: "courseCode",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "credits",
      align: "center",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
      align: "right",
    },
    {
      title: "Updated",
      dataIndex: "updated",
      key: "updated",
      align: "right",
    },
  ];
  // ACADEMIC RESULTS DATA AND COLUMNS
  const academicRecord = [
    {
      key: "1",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: (
        <div className="d-flex mx-auto justify-content-center align-items-center">
          F <div className="grade-f ms-2"></div>
        </div>
      ),
    },
    {
      key: "2",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: (
        <div className="d-flex mx-auto justify-content-center align-items-center">
          A+ <div className="grade-a-plus ms-"></div>
        </div>
      ),
    },
    {
      key: "3",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: (
        <div className="d-flex mx-auto justify-content-center align-items-center">
          C+ <div className="grade-c-plus ms-1"></div>
        </div>
      ),
    },
    {
      key: "4",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: (
        <div className="d-flex mx-auto justify-content-center align-items-center">
          F <div className="grade-f ms-2"></div>
        </div>
      ),
    },
    {
      key: "5",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: (
        <div className="d-flex mx-auto justify-content-center align-items-center">
          D <div className="grade-d ms-2"></div>
        </div>
      ),
    },
  ];
  const recordColumns = [
    {
      title: "Course Code",
      dataIndex: "courseCode",
      key: "courseCode",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "credits",
      align: "center",
      width: 150,
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "gpa",
      align: "center",
      width: 150,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      align: "center",
    },
  ];
  // ACADEMIC AVERAGE DATA AND COLUMNS
  const academicAvgRecord = [
    {
      key: "1",
      credits: "Quaterly",
      registered: 19,
      passed: 0,
      score: 19,
      gpa: 19,
      avg: "57%",
    },
    {
      key: "2",
      credits: "Cumulative",
      registered: 19,
      passed: 0,
      score: 19,
      gpa: 19,
      avg: "67%",
    },
  ];
  const academicAvgColumns = [
    {
      title: "Credits",
      dataIndex: "credits",
      key: "credits",
      align: "left",
    },
    {
      title: "Registered",
      dataIndex: "registered",
      key: "registered",
      align: "center",
    },
    {
      title: "passed",
      dataIndex: "passed",
      key: "passed",
      align: "center",
    },
    {
      title: "score",
      dataIndex: "score",
      key: "score",
      align: "center",
      width: 100,
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "gpa",
      align: "center",
    },
    {
      title: "Average",
      dataIndex: "avg",
      key: "avg",
      align: "right",
    },
  ];

  // console.log(props);
  // console.log(props.match.params.id);
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
              <span>Major:</span> Tafseer{" "}
            </p>
          </div>
        </div>

        <div className="card-result">
          <h6>Result Card</h6>
          {/* Result Cards */}
          <div className="qualification">
            <h6>Qualifications</h6>
            <div className="d-flex w-50 justify-content-between">
              <div>
                <p>College: College of Religion and Quranic Studies</p>
                <p>Department: Quranic Studies</p>
              </div>
              <div>
                <p>Major : Tafseer</p>
                <p>Education Level: 1</p>
              </div>
            </div>
          </div>
          {/* Grade Scale */}
          <div className="subCard-grade">
            <Table
              dataSource={gradeDataSource}
              columns={gradeColumns}
              pagination={false}
            />
          </div>
          {/* Export and Semester selection */}
          <div className="select-export d-flex justify-content-between align-items-end">
            <div>
              <p>Show</p>
              <Select
                defaultValue="All semsters"
                className="all-semester-select"
              >
                <Option>Semester A</Option>
                <Option>Semester b</Option>
                <Option>Semester c</Option>
                <Option>Semester d</Option>
              </Select>
            </div>

            <Button
              className="export-btn"
              icon={<ExportIcon className="me-1" />}
            >
              Export as PDF
            </Button>
          </div>
          {/* Current semester and academic record & average */}
          <div className="subCard-semester">
            <h6 className="text-center">
              Current semester Result card ( 2020/2021 Spring Semester )
            </h6>
            <Table
              dataSource={semesterResult}
              columns={semesterColumns}
              pagination={false}
            />
          </div>
          <div className="subCard-academic-record">
            <h6 className="text-center">
              Reported academic record 2009/2010 Fall Semester
            </h6>
            <Table
              dataSource={academicRecord}
              columns={recordColumns}
              pagination={false}
            />
            <Table
              dataSource={academicAvgRecord}
              columns={academicAvgColumns}
              pagination={false}
              className="academic-avg-record"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StudentDetails;
