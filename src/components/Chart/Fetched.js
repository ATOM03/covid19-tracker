const indiaUrl = "https://api.covid19india.org/data.json";

const fetchIndiaData = () => {
  fetch(indiaUrl)
    .then((response) => {
      //   console.log(response);
      return response;
    })
    .then((response) => {
      //   console.log(response);
      return response.body.getReader();
    })
    .then((reader) => reader.read())
    .then((utfObj) => {
      var utf = utfObj.value;
      var td = new TextDecoder("utf-8");
      var jsonData = JSON.parse(td.decode(utf));
      return jsonData;
    })
    .then((jsonData) => {
      //   console.log(jsonData);

      let data = {
        indiaChartData: {
          labels: [],
          datasets: [],
        },
      };
      let totalConfimed = {
        labels: "Total Confirmed Cases",
        data: [],
        borderColor: "rgba(255, 0, 0, 0.6)",
        pointBackgroundColor: "rgba(255, 0,0,0.8)",
        hoverBorderColor: "rgba(255,0,0,0.9)",
        pointHoverRadius: 6,
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

      var chartData = jsonData.cases_time_series;
      for (let i = 1; i < chartData.length; i++) {
        var chart = chartData[i];

        data.indiaChartData.labels.push(chart.date);

        totalConfimed.data.push(chart.totalconfirmed);
        totalDeaths.data.push(chart.totaldeceased);
        totalRecovered.data.push(chart.totalrecovered);
      }

      data.indiaChartData.datasets.push(totalConfimed);
      data.indiaChartData.datasets.push(totalDeaths);
      data.indiaChartData.datasets.push(totalRecovered);

      return data.indiaChartData;
    });
};

export default fetchIndiaData;
