import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  thousands_separators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  render() {
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
    // console.log(deltaconfirmed);
    return (
      <div className="summary">
        <p className="header-c">
          CONFIRMED <p>{deltaconfirmed}</p>
          <span className="confirmed">{confirmed}</span>
        </p>

        <p className="header-a">
          ACTIVE
          <p>
            <br />
          </p>
          <span className="active">{active}</span>
        </p>
        <p className="header-r">
          RECOVERED<p>{deltarecovered}</p>
          <span className="recovered">{recovered}</span>
        </p>
        <p className="header-d">
          DEATHS <p>{deltadeaths}</p>
          <span className="deaths">{deaths}</span>
        </p>
      </div>
    );
  }
}
export default Header;
