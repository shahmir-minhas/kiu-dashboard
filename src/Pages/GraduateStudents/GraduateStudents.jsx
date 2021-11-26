import React, { Component } from "react";

import {Link} from 'react-router-dom';
import { Select, Table } from "antd";

import "../../Styles/Pages/_graduateStudents.scss";
import TableTopBar from "../../Components/Common/TableTopBar";

const { Option } = Select;

const GraduteStudents = () => {
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
      serialNo: 2,
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
      serialNo: 3,
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
      serialNo: 4,
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
      key: "5",
      serialNo: 5,
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
      serialNo: 6,
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
      key: "7",
      serialNo: 7,
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
      key: "8",
      serialNo: 8,
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
      key: "9",
      serialNo: 9,
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
      key: "10",
      serialNo: 10,
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
      key: "11",
      serialNo: 11,
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
      //   dataIndex: "name",
      render: (data) => <Link to={`/student-details/${data.id}`}>{data.name}</Link>,
      key: "name",
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
  //   function showTotal(total) {
  //     return `Showing: 7 of ${total}`;
  //   }
  //   function itemRender(current, type, originalElement) {
  //     if (type === 'prev') {
  //       return <a>p</a>;
  //     }
  //     if (type === 'next') {
  //       return <a>n</a>;
  //     }
  //     return originalElement;
  //   }

  return (
    <React.Fragment>
      <div className="graduate-students-wrapper">
        <h6>Graduate Students</h6>
        <p>Select College</p>
        <Select defaultValue="All" className="select-college">
          <Option value="demo">demo</Option>
          <Option value="demo">demo</Option>
          <Option value="demo">demo</Option>
          <Option value="demo">demo</Option>
        </Select>

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

export default GraduteStudents;
