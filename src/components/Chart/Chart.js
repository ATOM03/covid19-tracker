import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
// import fetchIndiaData from "./Fetched";

function Chart(props) {
  const headerState = useSelector((state) => state.header);
  const isConfirmedSelect = headerState.isConfirmedSelect;
  const isActiveSelected = headerState.isActiveSelected;
  const isRecoveredSelected = headerState.isRecoveredSelected;
  const isDeathSelected = headerState.isDeathSelected;

  const chartFunction = (chartdata) => {
    let data = {
      indiaChartData: {
        labels: [],
        datasets: [],
      },
    };

    let totalConfimed = {
      label: "Total Confirmed Cases",
      data: [],
      borderColor: "rgb(255, 7, 58)",
      pointBackgroundColor: "rgb(255, 7, 58)",
      hoverBorderColor: "rgb(255, 7, 58)",
      pointHoverRadius: 5,
    };

    let totalDeaths = {
      label: "Total Deaths",
      data: [],
      borderColor: "rgba(200,200,200,0.6)",
      pointBackgroundColor: "rgba(200, 200, 200, 1)",
      hoverBorderColor: "rgba(230,230,230,1)",
      pointHoverRadius: 6,
    };

    let totalRecovered = {
      label: "Total Recovered",
      data: [],
      borderColor: "rgba(0,255,0, 0.6)",
      pointBackgroundColor: "rgba(0, 255, 0, 0.8)",
      hoverBorderColor: "rgba(0,255,0,0.9)",
      pointHoverRadius: 6,
    };

    var chartData = chartdata;
    for (let i = 10; i < chartData.length; i += 2) {
      var chart = chartData[i];
      data.indiaChartData.labels.push(chart.date);
      if (isConfirmedSelect) {
        totalConfimed.data.push(chart.totalconfirmed);
      }
      if (isDeathSelected) {
        totalDeaths.data.push(chart.totaldeceased);
      }
      if (isRecoveredSelected) {
        totalRecovered.data.push(chart.totalrecovered);
      }
    }

    data.indiaChartData.datasets.push(totalConfimed);
    data.indiaChartData.datasets.push(totalDeaths);
    data.indiaChartData.datasets.push(totalRecovered);

    console.log(data);
    return data.indiaChartData;
  };

  const confirmed = chartFunction(props.case_time);

  return (
    <div style={{ width: "100%" }}>
      <Line
        data={confirmed}
        width={650}
        height={600}
        options={{
          responsive: true,
          layout: {
            padding: {
              top: 32,
              bottom: 32,
              left: 10,
            },
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "STATUS",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
}

export default Chart;
