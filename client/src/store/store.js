import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import FoodReducer from './reducers/foods';
import authReducer from './reducers/auth';
import goalReducer from './reducers/goal';
import diaryReducer from './reducers/diary';
import measurementReducer from './reducers/measurement';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    foods: FoodReducer,
    auth: authReducer,
    goal: goalReducer,
    diary: diaryReducer,
    measurement: measurementReducer,
  },
});
