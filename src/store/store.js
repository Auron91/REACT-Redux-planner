import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../components/features/tasksSlice'

export default configureStore({
  reducer: {
      taskList: tasksReducer
  }
})