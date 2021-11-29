import React, { Component } from "react";

import { Table } from "antd";
const CurrentSemester = () => {
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
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CurrentSemester;
