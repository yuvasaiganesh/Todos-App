import Task from "../Task"
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";

import "./index.css";

const Home = () => {
  const [task, setTask] = useState("");
  const [sorting, setSort] = useState("one");
  const [taskList, setTasklist] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  const addTask = (event) => {
    setTask(event.target.value);
  };

  const toSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: uuidv4(), task: task, complete: false, status: "NotDone" };
    setTasklist((prevtask) => [...prevtask, newTask]);
    setTask("");
  };

  const deleteItem = (itemId) => {
    const newList = taskList.filter((item) => item.id !== itemId);
    setTasklist(newList);
  };

  const taskUpdate = (itemId) => {
    const newTodo = taskList.map((item) => {
      if (item.id === itemId) {
        item.complete = !item.complete;
        item.status = item.complete ? "Done" : "NotDone";
      }
      return item;
    });
    setTasklist(newTodo);
  };

  const updateSort = () => {
    let finalList = [];
    if (sorting === "one") {
      const newValues1 = taskList.filter((item) => item.status === "Done");
      const newValues2 = taskList.filter((item) => item.status === "NotDone");
      finalList = [...newValues1, ...newValues2];
    }
    if (sorting === "two") {
      const newValues1 = taskList.filter((item) => item.status === "Done");
      const newValues2 = taskList.filter((item) => item.status === "NotDone");
      finalList = [...newValues2, ...newValues1];
    }
    localStorage.setItem("taskList", JSON.stringify(finalList));
  };

  const changeSort = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    updateSort();
  }, [sorting, taskList]);

  return (
    <div className="homePage">
      <h1 className="taskHeading">Add Your Task</h1>
      <form onSubmit={toSubmit}>
        <input
          placeholder="Enter your Task"
          className="addTask"
          type="text"
          value={task}
          onChange={addTask}
        />
        <button className="submitButton" type="submit">
          Add
        </button>
      </form>
      <div className="sortingSection">
        <select onChange={changeSort}>
          <option value="one">complete to Not completed</option>
          <option value="two">Notcomplete to completed</option>
        </select>
      </div>
      <div>
        {taskList.map((item) => (
          <Task
            key={item.id}
            taskDetails={item}
            toUpdate={taskUpdate}
            addDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
