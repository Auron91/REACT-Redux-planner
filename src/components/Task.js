import React, { useState } from 'react';
import { circleIcon, checkedCircleIcon, editIcon, deleteIcon } from '../svg/icons';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, setEditedTask } from './features/tasksSlice';

const Task = ({ task }) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className="task" id={task.id} style={{ textDecoration: complete ? 'line-through' : 'none' }} >
            <div className="task__body" onClick={() => setComplete(!complete)}>
                <div className="task__complete">
                    {complete ? circleIcon : checkedCircleIcon }
                </div>
                <div className="task__body-text">{task.body}</div>
            </div>
            <div className="task__icons">
                <div className="task__icons--edit" 
                    onClick={() => dispatch(setEditedTask({body: task.body, id: task.id}))} >
                    { editIcon }
                </div>
                <div className="task__icons--delete" onClick={() => dispatch(deleteTaskAction(task.id))} >
                    { deleteIcon }
                </div>
            </div>
        </div>
    )
}

export default Task
