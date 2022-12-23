import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rocket: rocketsReducer,
  },
});
export default store;
