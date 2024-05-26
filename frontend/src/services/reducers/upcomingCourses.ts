import { SET_UPCOMING_COURSES } from "../types/redux";

export interface UpComingCourseType {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

const initialState: UpComingCourseType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <UpComingCourseType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_UPCOMING_COURSES:
      return payload;
    default:
      return state;
  }
}
