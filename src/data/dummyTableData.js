import React from "react";
import { Link } from "react-router-dom";
export const data = [
  {
    id: "1",
    name: "xpc1",
    status: (
      <div>
        <i className="fa fa-circle font-success f-12" /> Live
      </div>
    ),
    creat_on: "2018-04-18T00:00:00",
  },
  {
    id: "2",
    name: "Car Insurance ",
    status: (
      <div>
        {" "}
        <i className="fa fa-circle font-warning f-12" /> Draft{" "}
      </div>
    ),
    creat_on: "2018-04-18T00:00:00",
  },
  {
    id: "3",
    name: "xpc 2",
    status: (
      <div>
        <i className="fa fa-circle font-success f-12" /> Live{" "}
      </div>
    ),
    creat_on: "2018-04-18T00:00:00",
  },
  // {
  //     id:"4",
  //     name: "Sales  Menu",
  //     status: <i className="fa fa-circle font-danger f-12" />,
  //     creat_on:"2018-04-18T00:00:00"
  // },
  // {
  //     id:"5",
  //     name: "Vendor Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on:"2018-04-18T00:00:00"
  // },
  // {
  //     id:"6",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on:"2018-04-18T00:00:00"
  // }
];

export default data;
