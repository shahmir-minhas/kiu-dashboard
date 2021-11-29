import React, { Component } from "react";
import { Dropdown, Button, Menu, Form, Input, Select, Checkbox } from "antd";

import { ReactComponent as FilterIcon } from "../../Assets/Icons/Icon material-filter-list.svg";
import { ReactComponent as ExportIcon } from "../../Assets/Icons/Icon awesome-file-export.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/Icon material-search.svg";
import { ReactComponent as ArrowRightIcon } from "../../Assets/Icons/arrow-right.svg";

import "../../Styles/_tableTopBar.scss";

const { Option } = Select;

const TableTopBar = ({ totalItems }) => {
  const [visible, setvisible] = React.useState(false);

  const handleMenuClick = (e) => {
    console.log("handleMenu click", e);

    if (e.key === "5") {
      setvisible(false);
      console.log("set to false");
      console.log(visible);
    }
  };

  //   const handleVisibleChange = (flag) => {
  //     setvisible(flag);
  //   };

  const handleFilter = () => {
    setvisible(!visible);
    console.log("handlefilter");
  };

  const exportLinks = (
    <Menu>
      <Menu.Item key="0">CVS</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">Excel</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">PDF</Menu.Item>
    </Menu>
  );

  const filter = (
    //   <div className="filter-dropdown">
    <Menu onClick={handleMenuClick} className="filter-dropdown">
      <Menu.Item key="1" className="mb-2 mt-4 px-4">
        <h6>CGPA Range</h6>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <label htmlFor="">from</label>
            <Input className="filter-cgpa-input" type="number" />
          </div>
          <ArrowRightIcon className=" align-self-center" />
          <div className="d-flex flex-column">
            <label htmlFor="">to</label>
            <Input className="filter-cgpa-input" type="number" />
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2" className="mb-2 px-4">
        <h6>Scholarship</h6>
        <Select defaultValue="Select" className="select-input">
          <Option value="scholarship1">scholarship</Option>
          <Option value="scholarship2">scholarship</Option>
          <Option value="scholarship3">scholarship</Option>
        </Select>
      </Menu.Item>
      <Menu.Item key="3" className="mb-2 px-4">
        <h6>Country</h6>
        <Select defaultValue="Select" className="select-input">
          <Option value="Saudia">Saudia</Option>
          <Option value="Pakistan">Pakistan</Option>
          <Option value="country3">Saudia</Option>
        </Select>
      </Menu.Item>
      <Menu.Item key="4" className="mb-2 px-4">
        <h6>Major</h6>
        <Select defaultValue="Select" className="select-input">
          <Option value="jack">Islamic Sharia</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Menu.Item>
      <Menu.Item key="5" className="px-4">
        <div className="text-end">
          <Button className="btn-cancel me-3">Cancel</Button>
          <Button className="btn-apply">Apply</Button>
        </div>
      </Menu.Item>
    </Menu>
    //   </div>
  );

  return (
    <React.Fragment>
      <div className="table-top-bar">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h6 className="me-4">
              Students enrolled:
              <span className="ms-2">{totalItems}</span>
            </h6>

            <Dropdown
              overlay={filter}
              trigger={["click"]}
              // onVisibleChange={handleVisibleChange}
              visible={visible}
            >
              <Button
                className="btn-filter ant-dropdown-link"
                onClick={handleFilter}
              >
                Filter
                <FilterIcon className="ms-2" />
              </Button>
            </Dropdown>
          </div>
          <div className="d-flex pb-2">
            <Dropdown overlay={exportLinks} trigger={["click"]}>
              <Button className="btn-export me-3 ant-dropdown-link">
                <ExportIcon className="me-2" />
                Export
              </Button>
            </Dropdown>
            <Input className="input-search" prefix={<SearchIcon />} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableTopBar;
