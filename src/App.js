import React, { Component, useEffect, useState } from "react";
import "./App.css";
import StateDate from "./components/State/StateData";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { margin } from "@mui/system";
import { Provider } from "react-redux";
import store from "./components/Redux/Store";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App(props) {
  const [state, setState] = useState({
    loading: true,
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
  });
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    const data = fetch("https://covid-19api1.herokuapp.com", {
      // mode: "cors",
    })
      .then((res) => res.json())
      .then((json) => {
        setState({
          loading: false,
          status: json.statewise,
          confirmed: json.statewise[0].confirmed,
          active: json.statewise[0].active,
          recovered: json.statewise[0].recovered,
          deaths: json.statewise[0].deaths,
          deltaconfirmed: json.statewise[0].deltaconfirmed,
          deltarecovered: json.statewise[0].deltarecovered,
          deltadeaths: json.statewise[0].deltadeaths,
          case_time: json.cases_time_series,
          open: true,
        });
        setOpenSucess(true);
      })
      .catch((e) => {
        console.log(e);
        setState({ loading: false });
        setOpenError(false);
      });

    return data;
  }, []);

  if (state.loading) {
    return (
      <div className="Loading">
        <Box
          sx={{ display: "flex" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
          <h2
            style={{
              marginLeft: "20px",
              color: "white",
              letterSpacing: "1px",
            }}
          >
            Loading Please Wait
          </h2>
        </Box>
      </div>
    );
  } else {
    return (
      <Provider store={store}>
        <div>
          <h1 className="header">COVID19-INDIA</h1>
          {state.open ? (
            <div className="flex">
              <div className="status">
                <Header
                  confirmed={state.confirmed}
                  active={state.active}
                  recovered={state.recovered}
                  deaths={state.deaths}
                  deltaconfirmed={state.deltaconfirmed}
                  deltarecovered={state.deltarecovered}
                  deltadeaths={state.deltadeaths}
                />
                <StateDate status={state.status} />
              </div>
              <div className="chartDiv">
                <Chart case_time={state.case_time} />
              </div>
            </div>
          ) : (
            <div className="ErrorDoc">No data Available</div>
          )}

          <Stack spacing={2}>
            <Snackbar
              open={openSucess}
              // anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={6000}
              onClose={() => {
                setOpenSucess(false);
              }}
            >
              <Alert
                onClose={() => {
                  setOpenSucess(false);
                }}
                severity="success"
                sx={{ width: "100%" }}
              >
                Data Fetched Successfully
              </Alert>
            </Snackbar>

            <Snackbar
              open={openError}
              // anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={6000}
              onClose={() => {
                setState({ openError: false });
              }}
            >
              <Alert
                onClose={() => {
                  setState({ openError: false });
                }}
                severity="error"
                sx={{ width: "100%" }}
              >
                Enable to Fetch the Data
              </Alert>
            </Snackbar>
          </Stack>
        </div>
      </Provider>
    );
  }
}

export default App;
