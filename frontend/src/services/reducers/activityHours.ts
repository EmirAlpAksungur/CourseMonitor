import { SET_ACTIVITY_HOURS } from "../types/redux";
export interface ActivityHoursType {
  date: string | null;
  exams_completed: number | null;
  hours: number | null;
  lessons_taken: number | null;
}

const initialState: ActivityHoursType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <ActivityHoursType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVITY_HOURS:
      return payload;
    default:
      return state;
  }
}
