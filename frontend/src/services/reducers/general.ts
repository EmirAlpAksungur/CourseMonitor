import { SET_GENERAL_COMPANY_STATUS } from "../types/redux";
export interface GeneralType {
  avarageEmployeeScore: string | null;
  totalCompletedCourses: number | null;
  totalEmployees: number | null;
}

const initialState: GeneralType = {
  avarageEmployeeScore: null,
  totalCompletedCourses: null,
  totalEmployees: null,
};

interface action {
  type: string;
  payload: any;
}

export default function (state = <GeneralType>initialState, action: action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GENERAL_COMPANY_STATUS:
      return payload;
    default:
      return state;
  }
}
