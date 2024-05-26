import { SET_TOP_EMPLOYEES } from "../types/redux";

export interface TopEmployeesType {
  currentScore: number;
  email: string;
  name: string;
  title: string;
}

const initialState: TopEmployeesType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <TopEmployeesType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOP_EMPLOYEES:
      return payload;
    default:
      return state;
  }
}
