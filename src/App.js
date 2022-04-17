import React, { Component } from "react";
import "./App.css";
import StateDate from "./components/State/StateData";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      status: [],
      confirmed: "",
      active: "",
      recovered: "",
      deaths: "",
      deltaconfirmed: "",
      deltarecovered: "",
      deltadeaths: "",
      case_time: [],
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          status: json.statewise,
          confirmed: json.statewise[0].confirmed,
          active: json.statewise[0].active,
          recovered: json.statewise[0].recovered,
          deaths: json.statewise[0].deaths,
          deltaconfirmed: json.statewise[0].deltaconfirmed,
          deltarecovered: json.statewise[0].deltarecovered,
          deltadeaths: json.statewise[0].deltadeaths,
          case_time: json.cases_time_series,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    return data;
    // console.log(data);
  }

  render() {
    const stats = this.state.status;

    if (stats === null) {
      return <p>Loadiing...</p>;
    } else {
      return (
        <div>
          <h1 className="header">COVID19-INDIA</h1>
          <div className="flex">
            <div className="status">
              <Header
                confirmed={this.state.confirmed}
                active={this.state.active}
                recovered={this.state.recovered}
                deaths={this.state.deaths}
                deltaconfirmed={this.state.deltaconfirmed}
                deltarecovered={this.state.deltarecovered}
                deltadeaths={this.state.deltadeaths}
              />
              <StateDate status={this.state.status} />
            </div>
            <div>
              <Chart case_time={this.state.case_time} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
