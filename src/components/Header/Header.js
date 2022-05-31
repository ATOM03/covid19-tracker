import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeConfirmedStatus,
  changeActiveStatus,
  changeRecoveredStatus,
  changeDeathStatus,
} from "../Redux/HeaderAction";
import "./Header.css";

function Header(props) {
  const thousands_separators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state.header);
  const isConfirmedSelect = headerState.isConfirmedSelect;
  const isActiveSelected = headerState.isActiveSelected;
  const isRecoveredSelected = headerState.isRecoveredSelected;
  const isDeathSelected = headerState.isDeathSelected;
  const confirmed = thousands_separators(props.confirmed);
  const active = thousands_separators(props.active);
  const recovered = thousands_separators(props.recovered);
  const deaths = thousands_separators(props.deaths);
  const deltaconfirmed =
    "[+ " + thousands_separators(props.deltaconfirmed) + "]";
  const deltarecovered =
    "[+ " + thousands_separators(props.deltarecovered) + "]";
  const deltadeaths = "[+ " + thousands_separators(props.deltadeaths) + "]";
  // console.log(isConfirmedSelect);
  return (
    <div className="summary">
      <p
        className="header-c"
        id={isConfirmedSelect ? "selectedConf" : ""}
        onClick={() => dispatch(changeConfirmedStatus())}
      >
        Confirmed <p>{deltaconfirmed}</p>
        <span className="confirmed">{confirmed}</span>
      </p>

      <p
        className="header-a"
        id={isActiveSelected ? "selectedActiv" : ""}
        onClick={() => {
          dispatch(changeActiveStatus());
        }}
      >
        Active
        <p>
          <br />
        </p>
        <span className="active">{active}</span>
      </p>
      <p
        className="header-r"
        id={isRecoveredSelected ? "selectedReco" : ""}
        onClick={() => {
          dispatch(changeRecoveredStatus());
        }}
      >
        Recovered<p>{deltarecovered}</p>
        <span className="recovered">{recovered}</span>
      </p>
      <p
        className="header-d"
        id={isDeathSelected ? "selectedDea" : ""}
        onClick={() => {
          dispatch(changeDeathStatus());
        }}
      >
        Deaths <p>{deltadeaths}</p>
        <span className="deaths">{deaths}</span>
      </p>
    </div>
  );
}

export default Header;
