import React, {  } from 'react';
import Task from './Task'
import { calendarIcon } from '../svg/icons'
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector( state => state.taskList.tasks);
    const renderTasks = tasks.map((task) => {
        return (
            <Task task={task} key={task.id} />
        )
    })

    return (
        <div className="task-list" >
            <div className="task-list__header">
                { calendarIcon }
                <p>Task List</p>
            </div>
            { renderTasks}
        </div>
    )
}

export default TaskList
