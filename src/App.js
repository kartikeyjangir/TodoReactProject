import React, { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const [newitem, setNewitem] = useState();
  const [currlist, setCurrlist] = useState([]);
  const addtolist = () => {
    //setState function have acces to current state and change that state
    //here we are acessing old data using spread operator and making a new array and adding new item at the end of old items
    setCurrlist((olditems) => {
      return [...olditems, newitem];
    });
    setNewitem("");
  };
  // as props are immutable so they we ahve to make change in app.js to simplicity
  const deleteItem = (id) => {
    setCurrlist((olditems) => {
      return olditems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="todolist">
      <h1 className="heading">TO DO LIST </h1>

      <div className="inputdiv">
        <input
          type="text"
          placeholder="Add an Item"
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
        ></input>
        <button onClick={addtolist} className="addtodobutton">
          +
        </button>
      </div>

      <ol className="todolistitems">
        {/* //the index props in map funciton is return index of element it is
        reading although it is not recommended to use index directly for key but
        here we will compromise */}
        {currlist.map((listitems, index) => {
          return (
            <ToDoList
              text={listitems}
              key={index}
              id={index}
              onSelect={deleteItem}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
