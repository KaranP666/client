// import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";
const Body = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Series 1",
        data: [20, 90, 40, 30, 50, 80, 33],
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
      // offsetX: 900,
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
      categories: [
        "ML",
        "Blockchain",
        "AI",
        "Data Science",
        "Cyber Security",
        "App Dev",
        "Web Dev",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  });

  const [chartOptionss, setChartOptionss] = useState({
    series: [
      {
        name: "IA1",
        data: [34, 35, 27, 26, 31, 18, 23, 30],
      },
      {
        name: "IA2",
        data: [36, 35, 31, 28, 27, 25, 31, 34],
      },
      {
        name: "Semester",
        data: [53, 48, 40, 36, 45, 48, 42, 50],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "SEM 1",
        "SEM 2",
        "SEM 3",
        "SEM 4",
        "SEM 5",
        "SEM 6",
        "SEM 7",
        "SEM 8",
      ],
      title: {
        text: "Semesters",
        offsetY: 0,
      },
    },

    legend: {
      position: "top",
      offsetY: 5,
    },

    yaxis: {
      title: {
        text: "Marks of Student",
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return " " + val + " Marks";
        },
      },
    },
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer"
          >
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl  ">
          <div className="absolute left-[50%] top-[-10%] ">
            <Avatar src={user.result.avatar} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="overflow-y-scroll h-[27rem]">
            <div className="flex py-10 ml-10 space-x-40 ">
              <div className="flex flex-col space-y-10">
                <Data label="Name" value={user.result.name} />
                <Data label="Email" value={user.result.email} />
                <Data label="Username" value={user.result.username} />
                <Data label="Department" value={user.result.department} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data label="Mother's Name" value={user.result.motherName} />
              </div>
              <div className="flex flex-col space-y-10 ">
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="Section" value={user.result.section} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Batch" value={user.result.batch} />
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
