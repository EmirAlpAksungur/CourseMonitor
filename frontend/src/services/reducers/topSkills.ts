import { SET_TOP_SKILLS } from "../types/redux";

export interface TopSkillsType {
  employees: number;
  skill: string;
}

const initialState: TopSkillsType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <TopSkillsType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOP_SKILLS:
      return payload;
    default:
      return state;
  }
}
