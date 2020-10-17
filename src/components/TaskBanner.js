import React from "react";

import logo from "./logo.svg";
import "./App.css";

export const TaskBanner = (props) => (
  <div>
    <h4 className="bg-primary text-white test-center p-4" height="100">
      {props.userName} Tareas ({props.taskItems.filter((t) => !t.done).length}{" "}
      tareas por hacer)
      <img
        src={logo}
        className="App-logo sticky-top fixed-top align-self-start"
        alt="logo"
        height="70"
        width="70"
      />
    </h4>
  </div>
);
