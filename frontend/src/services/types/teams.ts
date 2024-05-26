import { TEAM_EMPLOYEE, TEAM_OVERALL_SCORE, TEAM_TOTAL_EMPLOYEE } from "./RGL";
export const layouts = {
  md: [
    { w: 5, h: 7, x: 0, y: 14, i: "0", moved: false, static: false },
    { w: 5, h: 7, x: 5, y: 21, i: "1", moved: false, static: false },
    { w: 5, h: 7, x: 0, y: 21, i: "2", moved: false, static: false },
    { w: 5, h: 7, x: 0, y: 0, i: "3", moved: false, static: false },
    { w: 5, h: 7, x: 5, y: 0, i: "4", moved: false, static: false },
    { w: 5, h: 7, x: 5, y: 14, i: "5", moved: false, static: false },
    { w: 5, h: 7, x: 0, y: 7, i: "6", moved: false, static: false },
    { w: 5, h: 7, x: 5, y: 7, i: "7", moved: false, static: false },
  ],
  lg: [
    { w: 6, h: 8, x: 0, y: 16, i: "0", moved: false, static: false },
    { w: 6, h: 8, x: 6, y: 24, i: "1", moved: false, static: false },
    { w: 6, h: 8, x: 0, y: 24, i: "2", moved: false, static: false },
    { w: 6, h: 8, x: 0, y: 0, i: "3", moved: false, static: false },
    { w: 6, h: 8, x: 6, y: 0, i: "4", moved: false, static: false },
    { w: 6, h: 8, x: 6, y: 16, i: "5", moved: false, static: false },
    { w: 6, h: 8, x: 0, y: 8, i: "6", moved: false, static: false },
    { w: 6, h: 8, x: 6, y: 8, i: "7", moved: false, static: false },
  ],
  sm: [
    { w: 6, h: 9, x: 0, y: 35, i: "0", moved: false, static: false },
    { w: 3, h: 7, x: 0, y: 44, i: "1", moved: false, static: false },
    { w: 3, h: 7, x: 3, y: 44, i: "2", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 0, i: "3", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 7, i: "4", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 14, i: "5", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 21, i: "6", moved: false, static: false },
    { w: 6, h: 7, x: 0, y: 28, i: "7", moved: false, static: false },
  ],
  xs: [
    { w: 4, h: 9, x: 0, y: 35, i: "0", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 44, i: "1", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 51, i: "2", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 0, i: "3", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 7, i: "4", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 14, i: "5", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 21, i: "6", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 28, i: "7", moved: false, static: false },
  ],
  xxs: [
    { w: 2, h: 9, x: 0, y: 30, i: "0", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 39, i: "1", moved: false, static: false },
    { w: 2, h: 4, x: 0, y: 45, i: "2", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 0, i: "3", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 6, i: "4", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 12, i: "5", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 18, i: "6", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 24, i: "7", moved: false, static: false },
  ],
};

export const content = [
  {
    id: "0",
    type: TEAM_EMPLOYEE,
  },
  {
    id: "1",
    type: TEAM_OVERALL_SCORE,
  },
  {
    id: "2",
    type: TEAM_TOTAL_EMPLOYEE,
  },
];
