import React, { Component } from "react";
import { Table, Button, Input, Dropdown, Select } from "antd";

import { ReactComponent as FilterIcon } from "../../Assets/Icons/Icon material-filter-list.svg";
import { ReactComponent as ExportIcon } from "../../Assets/Icons/Icon awesome-file-export.svg";
import "../../Styles/Pages/_studyingStudents.scss";

const { Search } = Input;
const { Option } = Select;

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
      dataIndex: "name",
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
  
  const menu = (
    <div className="filter-dropdown">
      <p>CGPA Range</p>
      <h6>Scholarship</h6>
      <Select defaultValue="Scholarship">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <h6>Country</h6>
      <Select defaultValue="Saudia Arabia">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <h6>Major</h6>
      <Select defaultValue="Islamic Sharia">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
  return (
    <React.Fragment>
      <div className="studying-students-wrapper">
        <h6>Studying Students</h6>
        <div className="students-table">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h6 className="me-4">
                Students enrolled:{" "}
                <span className="ms-2">{dataSource.length}</span>
              </h6>

              <Dropdown overlay={menu} trigger={["click"]}>
                <Button className="btn-filter ant-dropdown-link">
                  Filter
                  <FilterIcon className="ms-2" />
                </Button>
              </Dropdown>
            </div>
            <div className="d-flex pb-2">
              <Button className="btn-export me-3">
                <ExportIcon className="me-2" />
                Export
              </Button>
              <Search className="input-search" />
            </div>
          </div>
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
