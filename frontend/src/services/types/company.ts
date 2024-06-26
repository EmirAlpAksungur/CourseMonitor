import {
  TEAM_CORE_DETAILS,
  ORGANIZATION,
  AVARAGE_EMPLOYEE_SCORE,
  COMPLETED_COURSE,
  TOTAL_EMPLOYEE,
  TOP_EMPLOYEE_DATAGRID,
  TOP_SKILL_DATAGRID,
  TOP_EMPLOYEE_BAR,
  TOP_SKILL_BAR,
  TIME_LINE,
  SKILLS_DEVELOPMENT_DATAGRID,
  SKILLS_DEVELOPMENT_BAR,
  IN_PROGRESS_COURSE,
  UP_COMING_COURSE,
} from "./RGL";
export const layouts = {
  lg: [
    { w: 3, h: 6, x: 0, y: 0, i: "0", moved: false, static: false },
    { w: 3, h: 6, x: 3, y: 0, i: "1", moved: false, static: false },
    { w: 3, h: 6, x: 6, y: 0, i: "2", moved: false, static: false },
    { w: 3, h: 6, x: 9, y: 0, i: "3", moved: false, static: false },
    { w: 12, h: 12, x: 0, y: 49, i: "4", moved: false, static: false },
    { w: 3, h: 5, x: 9, y: 26, i: "5", moved: false, static: false },
    { w: 3, h: 6, x: 9, y: 20, i: "6", moved: false, static: false },
    { w: 3, h: 7, x: 9, y: 13, i: "7", moved: false, static: false },
    { w: 6, h: 7, x: 6, y: 6, i: "8", moved: false, static: false },
    { w: 3, h: 7, x: 6, y: 13, i: "9", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 6, i: "10", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 13, i: "11", moved: false, static: false },
    { w: 12, h: 6, x: 0, y: 43, i: "12", moved: false, static: false },
    { w: 3, h: 11, x: 6, y: 20, i: "13", moved: false, static: false },
    { w: 6, h: 11, x: 0, y: 20, i: "14", moved: false, static: false },
    { w: 12, h: 6, x: 0, y: 31, i: "15", moved: false, static: false },
    { w: 12, h: 6, x: 0, y: 37, i: "16", moved: false, static: false },
  ],
  md: [
    { w: 2.5, h: 5, x: 0, y: 0, i: "0", moved: false, static: false },
    { w: 2.5, h: 5, x: 2.5, y: 0, i: "1", moved: false, static: false },
    { w: 2.5, h: 5, x: 5, y: 0, i: "2", moved: false, static: false },
    { w: 2.5, h: 5, x: 7.5, y: 0, i: "3", moved: false, static: false },
    { w: 10, h: 12, x: 0, y: 52, i: "4", moved: false, static: false },
    { w: 4, h: 5, x: 3, y: 29, i: "5", moved: false, static: false },
    { w: 3, h: 5, x: 7, y: 29, i: "6", moved: false, static: false },
    { w: 3, h: 5, x: 0, y: 29, i: "7", moved: false, static: false },
    { w: 5, h: 6, x: 5, y: 5, i: "8", moved: false, static: false },
    { w: 5, h: 7, x: 5, y: 11, i: "9", moved: false, static: false },
    { w: 5, h: 6, x: 0, y: 5, i: "10", moved: false, static: false },
    { w: 5, h: 7, x: 0, y: 11, i: "11", moved: false, static: false },
    { w: 10, h: 6, x: 0, y: 46, i: "12", moved: false, static: false },
    { w: 5, h: 11, x: 5, y: 18, i: "13", moved: false, static: false },
    { w: 5, h: 11, x: 0, y: 18, i: "14", moved: false, static: false },
    { w: 10, h: 6, x: 0, y: 34, i: "15", moved: false, static: false },
    { w: 10, h: 6, x: 0, y: 40, i: "16", moved: false, static: false },
  ],
  sm: [
    { w: 3, h: 6, x: 0, y: 0, i: "0", moved: false, static: false },
    { w: 3, h: 6, x: 3, y: 0, i: "1", moved: false, static: false },
    { w: 3, h: 6, x: 0, y: 6, i: "2", moved: false, static: false },
    { w: 3, h: 6, x: 3, y: 6, i: "3", moved: false, static: false },
    { w: 6, h: 12, x: 0, y: 58, i: "4", moved: false, static: false },
    { w: 2, h: 5, x: 2, y: 36, i: "5", moved: false, static: false },
    { w: 2, h: 5, x: 4, y: 36, i: "6", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 36, i: "7", moved: false, static: false },
    { w: 3, h: 6, x: 3, y: 12, i: "8", moved: false, static: false },
    { w: 3, h: 7, x: 3, y: 18, i: "9", moved: false, static: false },
    { w: 3, h: 6, x: 0, y: 12, i: "10", moved: false, static: false },
    { w: 3, h: 7, x: 0, y: 18, i: "11", moved: false, static: false },
    { w: 6, h: 5, x: 0, y: 53, i: "12", moved: false, static: false },
    { w: 3, h: 11, x: 3, y: 25, i: "13", moved: false, static: false },
    { w: 3, h: 11, x: 0, y: 25, i: "14", moved: false, static: false },
    { w: 6, h: 6, x: 0, y: 41, i: "15", moved: false, static: false },
    { w: 6, h: 6, x: 0, y: 47, i: "16", moved: false, static: false },
  ],
  xs: [
    { w: 2, h: 5, x: 0, y: 0, i: "0", moved: false, static: false },
    { w: 2, h: 5, x: 2, y: 0, i: "1", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 5, i: "2", moved: false, static: false },
    { w: 2, h: 5, x: 2, y: 5, i: "3", moved: false, static: false },
    { w: 4, h: 12, x: 0, y: 82, i: "4", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 58, i: "5", moved: false, static: false },
    { w: 2, h: 4, x: 2, y: 54, i: "6", moved: false, static: false },
    { w: 2, h: 4, x: 0, y: 54, i: "7", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 10, i: "8", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 21, i: "9", moved: false, static: false },
    { w: 4, h: 5, x: 0, y: 16, i: "10", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 28, i: "11", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 76, i: "12", moved: false, static: false },
    { w: 4, h: 11, x: 0, y: 34, i: "13", moved: false, static: false },
    { w: 4, h: 9, x: 0, y: 45, i: "14", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 64, i: "15", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 70, i: "16", moved: false, static: false },
  ],
  xxs: [
    { w: 2, h: 5, x: 0, y: 0, i: "0", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 5, i: "1", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 10, i: "2", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 15, i: "3", moved: false, static: false },
    { w: 2, h: 8, x: 0, y: 100, i: "4", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 72, i: "5", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 78, i: "6", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 67, i: "7", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 20, i: "8", moved: false, static: false },
    { w: 2, h: 7, x: 0, y: 31, i: "9", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 26, i: "10", moved: false, static: false },
    { w: 2, h: 7, x: 0, y: 38, i: "11", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 95, i: "12", moved: false, static: false },
    { w: 2, h: 11, x: 0, y: 45, i: "13", moved: false, static: false },
    { w: 2, h: 11, x: 0, y: 56, i: "14", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 83, i: "15", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 89, i: "16", moved: false, static: false },
  ],
};

export const content = [
  {
    id: "0",
    type: TEAM_CORE_DETAILS,
    uuid: 0,
  },
  {
    id: "1",
    type: TEAM_CORE_DETAILS,
    uuid: 1,
  },
  {
    id: "2",
    type: TEAM_CORE_DETAILS,
    uuid: 2,
  },
  {
    id: "3",
    type: TEAM_CORE_DETAILS,
    uuid: 3,
  },
  {
    id: "4",
    type: ORGANIZATION,
  },
  {
    id: "5",
    type: AVARAGE_EMPLOYEE_SCORE,
  },
  {
    id: "6",
    type: COMPLETED_COURSE,
  },
  {
    id: "7",
    type: TOTAL_EMPLOYEE,
  },
  {
    id: "8",
    type: TOP_EMPLOYEE_DATAGRID,
  },
  {
    id: "9",
    type: TOP_SKILL_DATAGRID,
  },
  {
    id: "10",
    type: TOP_EMPLOYEE_BAR,
  },
  {
    id: "11",
    type: TOP_SKILL_BAR,
  },
  {
    id: "12",
    type: TIME_LINE,
  },
  {
    id: "13",
    type: SKILLS_DEVELOPMENT_DATAGRID,
  },
  {
    id: "14",
    type: SKILLS_DEVELOPMENT_BAR,
  },
  {
    id: "15",
    type: IN_PROGRESS_COURSE,
  },
  {
    id: "16",
    type: UP_COMING_COURSE,
  },
];
