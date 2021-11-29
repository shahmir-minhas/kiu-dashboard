import React, { Component } from "react";
import { Table } from "antd";

const AcademicRecord = () => {
  // ACADEMIC RESULTS DATASOURCE
  const academicRecord = [
    {
      key: "1",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: "F",
    },
    {
      key: "2",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: "A",
    },
    {
      key: "3",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: "C+",
    },
    {
      key: "4",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: "D",
    },
    {
      key: "5",
      courseCode: "10000201",
      courseName: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: 3,
      gpa: "3",
      grade: "A+",
    },
  ];

  // ACADEMIC AVERAGE DATASOURCE
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
  // ACADEMIC RESULTS COLUMNS
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
      // dataIndex: "grade",
      key: "grade",
      render: (data) => (
        <div className="d-flex mx-auto justify-content-around align-items-center">
          {data.grade}
          <div
            className={`grade-${
              data.grade === "A+"
                ? "a-plus"
                : data.grade === "A"
                ? "a"
                : data.grade === "B+"
                ? "b-plus"
                : data.grade === "B"
                ? "b"
                : data.grade === "C+"
                ? "c-plus"
                : data.grade === "C"
                ? "c"
                : data.grade === "D+"
                ? "d-plus"
                : data.grade === "D"
                ? "d"
                : "f"
            }`}
          ></div>
        </div>
      ),
      align: "center",
    },
  ];
  // ACADEMIC AVERAGE COLUMNs
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AcademicRecord;
