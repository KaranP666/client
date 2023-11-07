import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Body = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [{
      name: 'Series 1',
      data: [20, 90, 40, 30, 50, 80, 33],
    }],
    chart: {
      height: 350,
      type: 'radar',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radar: {
        size: 175,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    title: {
      text: 'Skillsets of students',
      offsetY: 0,
      // offsetX: 900,
      offsetX: 190
    },
    colors: ['#FF4560'],
    markers: {
      size: 3,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    xaxis: {
      categories: ['ML', 'Blockchain', 'AI', 'Data Science', 'Cyber Security', 'App Dev', 'Web Dev']
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val
          } else {
            return ''
          }
        }
      }
    }
  });

  const [chartOptionss, setChartOptionss] = useState({
    series: [{
      name: 'IA1',
      data: [34, 35, 27, 26, 31, 18, 23, 30]
    }, {
      name: 'IA2',
      data: [36, 35, 31, 28, 27, 25, 31, 34]
    }, {
      name: 'Semester',
      data: [53, 48, 40, 36, 45, 48, 42, 50]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4', 'SEM 5', 'SEM 6', 'SEM 7', 'SEM 8'],
      title: {
        text: 'Semesters',
        offsetY: 0
      }
    },

    legend: {
      position: 'top',
      offsetY: 5
    },

    yaxis: {
      title: {
        text: 'Marks of Student'
      }
    },

    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return " " + val + " Marks"
        }
      }
    }
  });

  return (
    <>
      <div id="chart" style={{float:'left'}}>
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="radar" height={500} width={550} />
      </div>
      <div id="chart1" style={{float:'right'}}>
        <ReactApexChart options={chartOptionss} series={chartOptionss.series} type="bar" height={500} width={650} />
      </div>
    </>
  );
};












// const Body1 = () => {
//   const [chartOptionss, setChartOptionss] = useState({
//     series: [{
//       name: 'IA1',
//       data: [34, 35, 27, 26, 31, 18, 23, 30]
//     }, {
//       name: 'IA2',
//       data: [36, 35, 31, 28, 27, 25, 31, 34]
//     }, {
//       name: 'Semester',
//       data: [53, 48, 40, 36, 45, 48, 42, 50]
//     }],
//       chart: {
//       type: 'bar',
//       height: 350
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//         endingShape: 'rounded'
//       },
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       show: true,
//       width: 3,
//       colors: ['transparent']
//     },
//     xaxis: {
//       categories: ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4', 'SEM 5', 'SEM 6', 'SEM 7', 'SEM 8'],
//       title: {
//         text: 'Semesters',
//         offsetY: 0
//       }
//     },

//     legend: {
//       position: 'top',
//       offsetY: 5
//     },

//     yaxis: {
//       title: {
//         text: 'Marks of Student'
//       }
//     },

//     fill: {
//       opacity: 1
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands"
//         }
//       }
//     }
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart options={chartOptionss} series={chartOptionss.series} type="bar" height={500}  width={650}/>
//     </div>
//   );
// };



export default Body;

