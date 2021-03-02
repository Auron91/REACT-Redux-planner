import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToggleModal, editTask } from './features/tasksSlice'

const EditTask = () => {
    const dispatch = useDispatch();
    const editedTask = useSelector(state => state.taskList.editedTask)

    const [editValue, setEditValue] = useState(editedTask)

    const onFormSubmit = (e, editValue, id) => {
        e.preventDefault();
        dispatch(editTask({ editValue, id}))
    }

    useEffect(() => {
        document.querySelector('#edit-input').focus();
        setEditValue(editedTask.body);
    }, [editedTask.body])

    return (
        <div className="">
            <div className="backdrop" onClick={() => dispatch(setToggleModal())}></div>
            <div className="edit-modal">
                <div className="edit-modal__title">
                    <h2>Edit task</h2>
                </div>
                <form id="edit-form" onSubmit={(e) => onFormSubmit(e, editValue, editedTask.id)}>
                    <input id="edit-input" type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    <div className="edit-modal__buttons">
                        <button type="button" className="btn" onClick={() => dispatch(setToggleModal())}>Cancel</button>
                        <button type="submit" className="btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTask;