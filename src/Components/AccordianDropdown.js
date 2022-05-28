import React from 'react'
import { Collapse } from "antd";
import { AiFillDownCircle } from "react-icons/ai";

import "antd/dist/antd.css";
import './Accord.css'

const { Panel } = Collapse;

const AccordianDropdown = () => {
     const onChange = (key) => {
       console.log(key);
     };
  return (
    <div className="">
      <div className="border-2 pl-10 pt-3 rounded-lg">
        <p className=" text-2xl text-sky-700 font-bold">Description</p>
        <p className="text-base text-black">
          The course aims at enhancing mathematical skills and brain
          development. It improves one's number sense and helps them gain the
          ability to understand relationships between quantities, while
          stimulating their brain and improving observation skills.
        </p>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <AiFillDownCircle className="w-5 h-5" />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="Details"
            key="1"
            style={{ color: "blue" }}
            className="site-collapse-custom-panel ant-collapse-header text-xl"
          >
            <p className="text-md ">
              CLASS 1- Criss-cross multiplication
            </p>
            <p className="text-md">
              CLASS 2- Subtraction with numbers near to 10 and multiples of 10
              Cutoff method addition/ Vyavakalanam method Dot method addition/
              Rekhanth method
            </p>
            <p className="text-md">
              CLASS 3- Multiplication upto 100 (Done mentally)
            </p>
            <p className="text-md">
              CLASS 4- Subtraction with Numbers near 10 and multiple of 10
            </p>
            <p className="text-md">
              CLASS 5- Digit sum method Multiplication using base method part 1/
              Nikhilam method, Fractions
            </p>
            <p className="text-md">
              CLASS 6- Base method multiplication part 2 Division part 1
            </p>
            <p className="text-md">CLASS 7 - LCM and HCF</p>
            <p className="text-md">
              CLASS 8- Multiplication with series of 9 Division part 2
            </p>
            <p className="text-md">
              CLASS 9- Multiplication with series of 1 Multiplication with 21,31
              41 91 Base complement method subtraction/ Nikhil am method
              ,Division of any number by 11
            </p>
            <p className="text-md">
              CLASS 10- Division with series of 9 Multiplication by digits 12 to
              19 Multiplication with 5, 25, 125 Percentage
            </p>
          </Panel>
        </Collapse>
      </div>
      <div className="border-2 pl-10 pt-3 rounded-lg my-3">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <AiFillDownCircle className="w-5 h-5" />
          )}
          className="site-collapse-custom-collapse "
        >
          <Panel
            header="Homework"
            key="1"
            style={{ color: "blue" }}
            className="site-collapse-custom-panel ant-collapse-header text-xl"
          >
            <p className="text-md ">
              Comprehensive home assignments will be provided , which will be an
              extension of what is done is the class.
            </p>
          </Panel>
        </Collapse>
      </div>
      <div className="border-2 pl-10 pt-3 rounded-lg my-3">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <AiFillDownCircle className="w-5 h-5" />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="Learning Goals"
            key="1"
            style={{ color: "blue" }}
            className="site-collapse-custom-panel ant-collapse-header text-xl"
          >
            <p className="text-md">
              Have Fun with Math! Get rid of your Math phobia. Become a Human
              Calculator yourself and be able to calculate 10-15 times faster
              than before!
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default AccordianDropdown