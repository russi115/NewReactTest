import React from "react";

export const TaskRow = (props) => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        className="float-right"
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
    <td>
      <button
        className="btn btn-danger float-right"
        onClick={() => props.removeTask(props.task)}
      >
        delete
      </button>
    </td>
  </tr>
);
