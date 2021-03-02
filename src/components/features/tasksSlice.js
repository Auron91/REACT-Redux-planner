import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
    name: 'reduxTasks',
    initialState: {
        tasks: [
            { body: "go to the gym", id: 1 },
            { body: "go shoping", id: 2 },
            { body: "go hiking", id: 3 },
          ],
        editedTask: {body:'', id: null},
        toggleModal: false
    },
    reducers: {
        addTaskAction: (state, action) => {
            state.tasks = [...state.tasks, {body: action.payload, id: uuidv4()}]
        },
        deleteTaskAction: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setEditedTask: (state, { payload }) => {
            state.editedTask = {body: payload.body, id: payload.id }
            state.toggleModal = true;
        },
        editTask: (state, {payload}) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload.id) {
                  return { body: payload.editValue, id: task.id };
                } else return task;
              });
             state.toggleModal = false;
        },
        setToggleModal: (state, {payload}) => {
            if (payload) {
                state.toggleModal = payload
            } else {
                state.toggleModal = !state.toggleModal;
            }
        }

    }
})

export const { addTaskAction, deleteTaskAction, setEditedTask, setToggleModal, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;