import React, { useEffect, useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import ReactApexChart from "react-apexcharts";
import { getStudentDetails } from "../../../redux/actions/studentActions";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.student.getStudentDetails);
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Series 1",
        data: [0, 0, 0, 0, 0, 0, 0],
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
      // offsetX:0,
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
      tickAmount: 10,
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
        name: "Semester",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
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
        text: "CGPA of Student",
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

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("user"));
    if (temp && temp?.result?._id) {
      dispatch(
        getStudentDetails({
          id: temp.result._id,
        })
      );
    }
  }, []);

  useEffect(() => {
    const tempValue = [];
    const tempKey = [];

    if (userDetails.skillSets) {
      Object.keys(userDetails.skillSets).forEach((key) => {
        tempValue.push(userDetails.skillSets[key]);
        tempKey.push(key);
      });
      chartOptions.series[0].data = tempValue;
      chartOptions.xaxis.categories = tempKey;
      setChartOptions({
        series: [
          {
            name: "Series 1",
            data: tempValue,
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
          // offsetX:0,
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
          categories: tempKey,
        },
        yaxis: {
          // tickAmount: 10,
          // labels: {
          //   formatter: function (val, i) {
          //     if (i % 2 === 0) {
          //       return val;
          //     } else {
          //       return "";
          //     }
          //   },
          // },
          min: 0,
          max: 10,
         
        },
      });
    }
  }, [userDetails]);

  useEffect(() => {
    const tempValue = [];
    const tempKey = [];

    if (userDetails.CGPA) {
      Object.keys(userDetails.CGPA).forEach((key) => {
        tempValue.push(userDetails.CGPA[key]);
        tempKey.push(key);
      });
      chartOptions.series[0].data = tempValue;
      chartOptions.xaxis.categories = tempKey;
      setChartOptionss({
        series: [
          {
            name: "Series 1",
            data: tempValue,
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
          text: "CGPA of students",
          offsetY: 0,
          // offsetX:0,
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
          categories: tempKey,
        },
        yaxis: {
          // tickAmount: 10,
          // labels: {
          //   formatter: function (val, i) {
          //     if (i % 2 === 0) {
          //       return val;
          //     } else {
          //       return "";
          //     }
          //   },
          // },
          min: 0,
          max: 10,
          title: {
            text: "CGPA of Student",
          }
        },
      });
    }
  }, [userDetails]);

  return (
    <>
      <div className="flex-[0.8] mt-3">
        <div className="space-y-5">
          <div className="flex  items-center justify-between mr-8">
            <div className="flex space-x-2 text-gray-400">
              <AssignmentIndIcon />
              <h1>Profile</h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
