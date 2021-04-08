import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="maintodo">
        <button
          className="donebutton"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <li className="maintodoli">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
