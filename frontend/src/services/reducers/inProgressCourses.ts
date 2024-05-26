import { SET_IN_PROGRESS_COURSES } from "../types/redux";
export interface InProgressCoursesType {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

const initialState: InProgressCoursesType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <InProgressCoursesType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_IN_PROGRESS_COURSES:
      return payload;
    default:
      return state;
  }
}
