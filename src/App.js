import React, { Component } from "react";
import "./App.css";
import StateDate from "./components/State/StateData";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
      open: false,
      openSucess: false,
      openError: false,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.covid19india.org/data.json", {
      // mode: "cors",
    })
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
          openSucess: true,
          open: true,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ openError: true });
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
          {this.state.open ? (
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
          ) : (
            <div className="ErrorDoc">No data Available</div>
          )}

          <Stack spacing={2}>
            <Snackbar
              open={this.state.openSucess}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={6000}
              onClose={() => {
                this.setState({ openSucess: false });
              }}
            >
              <Alert
                onClose={() => {
                  this.setState({ openSucess: false });
                }}
                severity="success"
                sx={{ width: "100%" }}
              >
                Data Fetched Successfully
              </Alert>
            </Snackbar>

            <Snackbar
              open={this.state.openError}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={6000}
              onClose={() => {
                this.setState({ openError: false });
              }}
            >
              <Alert
                onClose={() => {
                  this.setState({ openError: false });
                }}
                severity="error"
                sx={{ width: "100%" }}
              >
                Enable to Fetch the Data
              </Alert>
            </Snackbar>
          </Stack>
        </div>
      );
    }
  }
}

export default App;
