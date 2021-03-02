import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskAction } from './features/tasksSlice';


const AddTask = ({ addTask }) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(input) dispatch(addTaskAction(input));
        setInput('');
        
    }

    return (
        <form tabIndex="0" className="add-task" onSubmit ={ onFormSubmit }>
            <div className="add-task__input">
                <label htmlFor=""><h3>Add Task</h3></label>
                <input tabIndex="0" type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            </div>
            <button className="btn btn-add" type="submit">
                <svg className="add-task__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </button>
        </form>
    )
}

export default AddTask
