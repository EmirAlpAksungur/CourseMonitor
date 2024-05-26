import {
  SET_DATAGRID,
  SET_SELECTED_TEAMS,
  DELETE_TEAMS,
  ADD_TEAM,
  SET_SELECTED_EMPLOYEE_INITIAL,
  HANDLE_CHANGE_TEAM,
  SET_SELECTED_EMPLOYEE,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  HANDLE_CHANGE_EMPLOYEE,
} from "../types/redux";
import { uuidv4 } from "../utils/uuidv4";

interface Employees {
  current_score: number;
  email: string;
  lessons_taken: number;
  name: string;
  skills_being_developed: string[];
  title: string;
  uuid: string;
}

interface GridItem {
  description: string;
  employees: Employees[];
  overall_score: string;
  title: string;
  total_employee_count: number;
  uuid: string;
}

interface SelectedEmployee {
  [key: string]: string[];
}

export interface DataGridType {
  gridItem: GridItem[];
  selectedTeams: string[];
  selectedEmployees: SelectedEmployee;
}

const initialState: DataGridType = {
  gridItem: [],
  selectedTeams: [],
  selectedEmployees: {},
};

interface action {
  type: string;
  payload: any;
}

export default function (state = <DataGridType>initialState, action: action) {
  const { type, payload } = action;

  switch (type) {
    case SET_DATAGRID:
      return {
        ...state,
        gridItem: payload,
      };
    case SET_SELECTED_EMPLOYEE_INITIAL:
      return {
        ...state,
        selectedEmployees: payload,
      };
    case SET_SELECTED_TEAMS:
      return {
        ...state,
        selectedTeams: payload,
      };
    case DELETE_TEAMS:
      let newItem = state.gridItem.filter((e) => {
        return !state.selectedTeams.includes(e.uuid);
      });
      return {
        ...state,
        selectedTeams: [],
        gridItem: newItem,
      };
    case HANDLE_CHANGE_TEAM:
      const newData = state.gridItem.map((e: any) => {
        if (e.uuid === payload.uuid) {
          return payload;
        }
        return e;
      });
      return {
        ...state,
        gridItem: newData,
      };
    case ADD_TEAM:
      return {
        ...state,
        gridItem: [
          ...state.gridItem,
          {
            description: "",
            employees: {
              current_score: 0,
              email: "",
              lessons_taken: 0,
              name: "",
              skills_being_developed: [],
              title: "",
              uuid: uuidv4(),
            },
            overall_score: "0",
            title: "",
            total_employee_count: 0,
            uuid: uuidv4(),
          },
        ],
      };
    case SET_SELECTED_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: {
          ...state.selectedEmployees,
          [payload.teamId]: payload.id,
        },
      };

    case DELETE_EMPLOYEE:
      let newVal = state.gridItem?.filter((a) => {
        if (payload.teamId !== a.uuid) return a;
        let newEmp = a.employees.filter(
          (e) => !state.selectedEmployees?.[payload.teamId].includes(e.uuid)
        );
        a.employees = newEmp;
        return a;
      });

      return {
        ...state,
        selectedEmployees: {
          ...state.selectedEmployees,
          [payload.teamId]: [],
        },
        gridItem: newVal,
      };
    case ADD_EMPLOYEE:
      let addedEmpVal = state.gridItem?.map((e) => {
        if (e.uuid !== payload.teamId) return e;
        return {
          ...e,
          employees: [
            ...e.employees,
            {
              current_score: 0,
              email: "",
              lessons_taken: 0,
              name: "",
              skills_being_developed: [],
              title: "",
              uuid: uuidv4(),
            },
          ],
        };
      });
      return {
        ...state,
        selectedEmployees: {
          ...state.selectedEmployees,
          [payload.teamId]: [],
        },
        gridItem: addedEmpVal,
      };
    case HANDLE_CHANGE_EMPLOYEE:
      let changed = state.gridItem?.map((e) => {
        if (e.uuid !== payload.teamId) return e;
        return {
          ...e,
          employees: e.employees.map((a) => {
            if (a.uuid !== payload.value.uuid) return a;
            return payload.value;
          }),
        };
      });
      return {
        ...state,
        selectedEmployees: {
          ...state.selectedEmployees,
          [payload.teamId]: [],
        },
        gridItem: changed,
      };
    default:
      return state;
  }
}
