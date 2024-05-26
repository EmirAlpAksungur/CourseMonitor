import { SET_TEAMS } from "../types/redux";

interface Employees {
  current_score: number;
  email: string;
  lessons_taken: number;
  name: string;
  skills_being_developed: string[];
  title: string;
}

export interface TeamsType {
  description: string;
  employees: Employees[];
  overall_score: string;
  title: string;
  total_employee_count: number;
}

const initialState: TeamsType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (state = <TeamsType[]>initialState, action: action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEAMS:
      return payload;
    default:
      return state;
  }
}
