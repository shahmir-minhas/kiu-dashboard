import React, { Component } from "react";
import { Table} from "antd";
import { Link } from "react-router-dom";
import TableTopBar from "../../Components/Common/TableTopBar";

import "../../Styles/Pages/_studyingStudents.scss";

const StudyingStudents = () => {

  const dataSource = [
    {
      key: "1",
      serialNo: 1,
      id: "0155",
      name: "Shahmir",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "2",
      serialNo: 1,
      id: "0155",
      name: "Shahmir",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "3",
      serialNo: 1,
      id: "0155",
      name: "Shahmir",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "4",
      serialNo: 1,
      id: "0155",
      name: "ali",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "5",
      serialNo: 1,
      id: "0155",
      name: "Shahmir",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "6",
      serialNo: 1,
      id: "0155",
      name: "ali",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
    {
      key: "7",
      serialNo: 1,
      id: "0155",
      name: "Shahmir",
      iqamaCountry: "Pakistan",
      college: "English",
      scholarship: "Full",
      country: "Saudia Arabia",
      major: "Islamic Sharia",
      cumulativeAvg: "102,321",
    },
  ];

  const columns = [
    {
      title: "S.no",
      dataIndex: "serialNo",
      key: "serialNo",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
      render: (data) => <Link to={`/student-details/${data.id}`}>{data.name}</Link>,
    },
    {
      title: "Iqama Country",
      dataIndex: "iqamaCountry",
      key: "iqamaCountry",
    },
    {
      title: "College",
      dataIndex: "college",
      key: "college",
    },
    {
      title: "Scholarship",
      dataIndex: "scholarship",
      key: "scholarship",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Major",
      dataIndex: "major",
      key: "major",
    },
    {
      title: "Cumulative Avg",
      dataIndex: "cumulativeAvg",
      key: "cumulativeAvg",
      align: "right",
    },
  ];


  return (
    <React.Fragment>
      <div className="studying-students-wrapper">
        <h6>Studying Students</h6>
        <div className="students-table">
        <TableTopBar totalItems={dataSource.length}/>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              pageSize: 6,
              showTotal: (total, currentSize) =>
                `Showing: ${currentSize[1]} of ${total}`,
              size: "small",
              hideOnSinglePage: true,
            }}
          />
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default StudyingStudents;
