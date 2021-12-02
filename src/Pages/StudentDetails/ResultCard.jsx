import React, { Component } from "react";
import { Table, Select, Button } from "antd";
import CurrentSemester from "./CurrentSemester";
import AcademicRecord from "./AcademicRecord";
import { ReactComponent as ExportIcon } from "../../Assets/Icons/Icon awesome-file-export-blue.svg";

const { Option } = Select;

const ResultCard = () => {
  // ----------------- DATA SOURCES -------------------
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

  // ----------------- COLUMNS -------------------
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

  return (
    <React.Fragment>
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
            <Select defaultValue="All semsters" className="all-semester-select">
              <Option>Semester A</Option>
              <Option>Semester b</Option>
              <Option>Semester c</Option>
              <Option>Semester d</Option>
            </Select>
          </div>
          <Button className="export-btn" icon={<ExportIcon className="me-1" />}>
            Export as PDF
          </Button>
        </div>
        {/* Current semester and academic record & average */}
        <CurrentSemester />
        <AcademicRecord />
      </div>
    </React.Fragment>
  );
};

export default ResultCard;
