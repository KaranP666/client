import React, { useEffect, useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { getStudentDetails } from "../../../redux/actions/studentActions";
import { Avatar, Input } from "@mui/material";
import Data from "./Data";
import { useDispatch, useSelector } from "react-redux";
import * as classes from "../../../utils/styles";
import { getStudentByUsername } from "../../../redux/actions/facultyActions";
import Spinner from "../../../utils/Spinner";
import ReactApexChart from "react-apexcharts";

const Body = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const student = useSelector((state) => state.faculty.student);
  const loading = useSelector((state) => state.faculty.loading);

  const [showData, setShowData] = useState(false);
  const [chartOptions, setChartOptions] = useState({});
  const [chartOptionss, setChartOptionss] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      dispatch(getStudentByUsername(username));
      setShowData(true);
    } else {
      setShowData(false);
    }
  };
  useEffect(() => {
    if (student) {
      const skillSets = student.skillSets || {};
      const CGPA = student.CGPA || {};
      const skillKeys = Object.keys(skillSets);
      const skillValues = Object.values(skillSets);
  
      const cgpaKeys = Object.keys(CGPA);
      const cgpaValues = Object.values(CGPA);
  
      setChartOptions({
        series: [
          {
            name: "Skillsets",
            data: skillValues,
          },
        ],
        chart: {
          height: 350,
          type: "radar",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radar: {
            size: 175,
            polygons: {
              strokeColors: "#e9e9e9",
              fill: {
                colors: ["#f8f8f8", "#fff"],
              },
            },
          },
        },
        title: {
          text: "Skillsets of students",
          offsetY: 0,
          offsetX: 190,
        },
        colors: ["#FF4560"],
        markers: {
          size: 3,
          colors: ["#fff"],
          strokeColor: "#FF4560",
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          categories: skillKeys,
        },
        yaxis: {
          min: 0,
          max: 10,
        },
      });
  
      setChartOptionss({
        series: [
          {
            name: "CGPA",
            data: cgpaValues,
          },
        ],
        chart: {
          height: 350,
          type: "bar",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        title: {
          text: "CGPA of students",
          offsetY: 0,
          offsetX: 190,
        },
        colors: ["#FF4560"],
        markers: {
          size: 3,
          colors: ["#fff"],
          strokeColor: "#FF4560",
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          categories: cgpaKeys,
          title: {
            text: "Semesters",
            offsetY: 0,
          },
        },
        yaxis: {
          min: 0,
          max: 10,
          title: {
            text: "CGPA of Student",
          },
        },
      });
    }
  }, [student]);


  

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Student Report</h1>
          </div>
          <div>
            <form
              className="flex flex-col space-y-2 col-span-1"
              // className="flex space-x-2"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username" className="text-gray-400">
                Username
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button
                className={`${classes.adminFormSubmitButton} w-56`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl  ">
          {loading ? (
            <Spinner
              message="Loading"
              height={50}
              width={150}
              color="#111111"
              messageColor="blue"
            />
          ) : showData && student ? (
            // <div className="w-[98%] bg-white relative rounded-xl">
            <>
              <div className="absolute left-[50%] top-[-10%]">
                <Avatar src={student.avatar} sx={{ width: 70, height: 70 }} />
              </div>
              <div className="overflow-y-scroll h-[27rem]">
              <div className="flex py-10 ml-10 space-x-40 ">
                <div className="flex flex-col space-y-10">
                  <Data label="Name" value={student.name} />
                  <Data label="Gender" value={student.gender} />
                  <Data label="Email" value={student.email} />
                  <Data label="Username" value={student.username} />
                  <Data label="DOB" value={student.dob} />
                </div>
                <div className="flex flex-col space-y-10 pb-[10px]">
                  <Data label="Department" value={student.department} />
                  <Data label="Year" value={student.year} />
                  <Data label="Section" value={student.section} />
                  <Data label="Contact Number" value={student.contactNumber} />
                  <Data label="Batch" value={student.batch} />
                  
                </div>

               

                </div>
                 <div id="chart" style={{ float: "left" }}>
                <ReactApexChart
                  options={chartOptions}
                  series={chartOptions.series}
                  type="radar"
                  height={500}
                  width={550}
                />
              </div>
              <div id="chart1" style={{ float: "right" }}>
                <ReactApexChart
                  options={chartOptionss}
                  series={chartOptionss.series}
                  type="bar"
                  height={500}
                  width={550}
                />
              </div>
              </div>
            </>
          ) : showData ? (
            <p className="font-bold text-3xl text-red-800">No student found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Body;
