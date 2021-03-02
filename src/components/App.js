import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setToggleModal } from './features/tasksSlice';

import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import EditTask from "./EditTask";

function App() {
    const dispatch = useDispatch();
    const toggleModal = useSelector(state => state.taskList.toggleModal);

  document.querySelector("#root").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dispatch(setToggleModal());
    }
  });

  return (
    <div className="container">
      <Header />
      <TaskList />
      <AddTask />
      {toggleModal && (
        <EditTask/>
      )}
    </div>
  );
}

export default App;
