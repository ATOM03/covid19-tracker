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
        <table className="Table">
          <tr className="state-heading">
            <th className="state-states start">STATES/UT</th>
            <th className="state-states">CONFIRMED</th>
            <th className="state-states">ACTIVE</th>
            <th className="state-states"> RECOVERED</th>
            <th className="state-states">DEATHS</th>
          </tr>
          {stats.map((stat) => (
            <tr>
              <td className="state">{stat.state}</td>
              <td className="state flex-end">{stat.confirmed}</td>
              <td className="state flex-end">{stat.active}</td>
              <td className="state flex-end">{stat.recovered}</td>
              <td className="state flex-end">{stat.deaths}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default StateDate;
