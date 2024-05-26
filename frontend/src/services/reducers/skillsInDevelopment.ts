import { SET_SKILL_IN_DEVELOPMENT } from "../types/redux";
export interface SkillsInDevelopmentType {
  employees: number;
  skill: string;
}

const initialState: SkillsInDevelopmentType[] = [];

interface action {
  type: string;
  payload: any;
}

export default function (
  state = <SkillsInDevelopmentType[]>initialState,
  action: action
) {
  const { type, payload } = action;

  switch (type) {
    case SET_SKILL_IN_DEVELOPMENT:
      return payload;
    default:
      return state;
  }
}
