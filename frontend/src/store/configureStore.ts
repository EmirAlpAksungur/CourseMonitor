import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import {
  activityHours,
  notification,
  general,
  inProgressCourses,
  skillsInDevelopment,
  teams,
  datagrid,
  topEmployees,
  topSkills,
  upcomingCourses,
} from "../services/reducers";
const { logger } = require(`redux-logger`);
export interface RootState {
  activityHours: any;
  notification: any;
  general: any;
  inProgressCourses: any;
  skillsInDevelopment: any;
  topEmployees: any;
  teams: any;
  datagrid: any;
  topSkills: any;
  upcomingCourses: any;
  [key: string]: any;
}

const middleware: Middleware[] = [thunk, logger];

const rootReducer = combineReducers<RootState>({
  activityHours: activityHours,
  notification: notification,
  general: general,
  inProgressCourses: inProgressCourses,
  skillsInDevelopment: skillsInDevelopment,
  teams: teams,
  datagrid: datagrid,
  topEmployees: topEmployees,
  topSkills: topSkills,
  upcomingCourses: upcomingCourses,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export const persistor = store;
export type AppDispatch = typeof store.dispatch;
