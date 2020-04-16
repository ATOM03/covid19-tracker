import React, { Component } from "react";
import { Line } from "react-chartjs-2";
// import fetchIndiaData from "./Fetched";
class Chart extends Component {
  chartFunction = (chartdata) => {
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

      totalConfimed.data.push(chart.totalconfirmed);
      totalDeaths.data.push(chart.totaldeceased);
      totalRecovered.data.push(chart.totalrecovered);
    }

    data.indiaChartData.datasets.push(totalConfimed);
    data.indiaChartData.datasets.push(totalDeaths);
    data.indiaChartData.datasets.push(totalRecovered);

    console.log(data);
    return data.indiaChartData;
  };
  render() {
    var confirmed = this.chartFunction(this.props.case_time);
    // console.log(this.props.case_time);
    // var data = fetchIndiaData();
    // console.log(this.state.charData);
    return (
      <div>
        <Line
          data={confirmed}
          width={650}
          height={400}
          options={{
            responsive: true,
            layout: {
              padding: {
                top: 32,
                bottom: 32,
                left: 52,
              },
            },
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Confirmed Cases",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
        {/* <Line
          data={data}
          width={750}
          height={400}
          options={{
            responsive: true,
            layout: {
              padding: {
                top: 32,
                bottom: 32,
              },
            },
            title: {
              display: true,
              text: "Confirmed Cases",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        /> */}
      </div>
    );
  }
}

export default Chart;
