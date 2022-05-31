import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      isConfirmedSelect: true,
      isActiveSelected: false,
      isRecoveredSelected: false,
      isDeathSelected: false,
    };
  }
  thousands_separators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  render() {
    const isConfirmedSelect = this.state.isConfirmedSelect;
    const isActiveSelected = this.state.isActiveSelected;
    const isRecoveredSelected = this.state.isRecoveredSelected;
    const isDeathSelected = this.state.isDeathSelected;
    const confirmed = this.thousands_separators(this.props.confirmed);
    const active = this.thousands_separators(this.props.active);
    const recovered = this.thousands_separators(this.props.recovered);
    const deaths = this.thousands_separators(this.props.deaths);
    const deltaconfirmed =
      "[+ " + this.thousands_separators(this.props.deltaconfirmed) + "]";
    const deltarecovered =
      "[+ " + this.thousands_separators(this.props.deltarecovered) + "]";
    const deltadeaths =
      "[+ " + this.thousands_separators(this.props.deltadeaths) + "]";
    // console.log(isConfirmedSelect);
    return (
      <div className="summary">
        <p
          className="header-c"
          id={isConfirmedSelect ? "selectedConf" : ""}
          onClick={() => {
            this.setState({
              isConfirmedSelect: true,
              isActiveSelected: false,
              isRecoveredSelected: false,
              isDeathSelected: false,
            });
          }}
        >
          CONFIRMED <p>{deltaconfirmed}</p>
          <span className="confirmed">{confirmed}</span>
        </p>

        <p
          className="header-a"
          id={isActiveSelected ? "selectedActiv" : ""}
          onClick={() => {
            this.setState({
              isConfirmedSelect: false,
              isActiveSelected: true,
              isRecoveredSelected: false,
              isDeathSelected: false,
            });
          }}
        >
          ACTIVE
          <p>
            <br />
          </p>
          <span className="active">{active}</span>
        </p>
        <p
          className="header-r"
          id={isRecoveredSelected ? "selectedReco" : ""}
          onClick={() => {
            this.setState({
              isConfirmedSelect: false,
              isActiveSelected: false,
              isRecoveredSelected: true,
              isDeathSelected: false,
            });
          }}
        >
          RECOVERED<p>{deltarecovered}</p>
          <span className="recovered">{recovered}</span>
        </p>
        <p
          className="header-d"
          id={isDeathSelected ? "selectedDea" : ""}
          onClick={() => {
            this.setState({
              isConfirmedSelect: false,
              isActiveSelected: false,
              isRecoveredSelected: false,
              isDeathSelected: true,
            });
          }}
        >
          DEATHS <p>{deltadeaths}</p>
          <span className="deaths">{deaths}</span>
        </p>
      </div>
    );
  }
}
export default Header;
