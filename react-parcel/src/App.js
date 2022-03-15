import React, { useState, useEffect } from "react";

import { listenEvent } from "@mc/utils";

const App = ({ name }) => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent("@mc/react-route/todo/add-task", (event) => {
      console.log("LLamada => ", event);
      updateTasks((prevTask) => [...prevTask, event.detail]);
    });
  }, []);
  return (
    <>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
