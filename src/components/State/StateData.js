import React, { Component } from "react";
import "./state.css";
class StateDate extends Component {
  render() {
    const stats = this.props.status;
    // console.log(stats);
    stats.shift();
    // console.log(stats);
    return (
      <div className="state-flex">
        <ul>
          <p className="head-p">States</p>
          {stats.map((stat) => (
            <div className="div-state">{stat.state}</div>
          ))}
        </ul>

        <ul>
          <p className="head-p">Confirmed</p>
          {stats.map((stat) => (
            <div className="div-state">{stat.confirmed}</div>
          ))}
        </ul>

        <ul>
          <p className="head-p">Active</p>
          {stats.map((stat) => (
            <div className="div-state">{stat.active}</div>
          ))}
        </ul>

        <ul>
          <p className="head-p">Recovered</p>
          {stats.map((stat) => (
            <div className="div-state">{stat.recovered}</div>
          ))}
        </ul>

        <ul>
          <p className="head-p">Deaths</p>
          {stats.map((stat) => (
            <div className="div-state">{stat.deaths}</div>
          ))}
        </ul>
      </div>
    );
  }
}

export default StateDate;
