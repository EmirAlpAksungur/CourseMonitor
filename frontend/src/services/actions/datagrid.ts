import {
  SET_DATAGRID,
  SET_SELECTED_TEAMS,
  DELETE_TEAMS,
  ADD_TEAM,
  HANDLE_CHANGE_TEAM,
  SET_SELECTED_EMPLOYEE_INITIAL,
  SET_SELECTED_EMPLOYEE,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  HANDLE_CHANGE_EMPLOYEE,
} from "../types/redux";
import { AppDispatch, RootState } from "../../store/configureStore";
import { uuidv4 } from "../utils/uuidv4";
import { changeNotification } from "./notification";
//general
export const addCreateDatagrid =
  (data: any) => async (dispatch: AppDispatch) => {
    let tempData: any[] = [];
    let selectedEmployees: any = {};
    for (let index = 0; index < data.length; index++) {
      let tempEmployees: any[] = [];
      let uuid = uuidv4();
      for (let k = 0; k < data[index].employees.length; k++) {
        tempEmployees.push({
          ...data[index].employees[k],
          uuid: uuidv4(),
        });
      }
      tempData.push({
        ...data[index],
        uuid,
        employees: tempEmployees,
      });
      selectedEmployees[uuid] = {};
    }
    dispatch({
      type: SET_DATAGRID,
      payload: tempData,
    });
    dispatch({
      type: SET_SELECTED_EMPLOYEE_INITIAL,
      payload: selectedEmployees,
    });
  };

//data

export const selectItemTeams =
  (id: String[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SELECTED_TEAMS,
      payload: id,
    });
  };

export const deleteTeams =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    if (getState().datagrid.selectedTeams.length > 0) {
      dispatch({
        type: DELETE_TEAMS,
      });
      dispatch(
        changeNotification({
          NotificationText: "Teams Deleted",
          NotificationCode: "success",
        })
      );
    } else {
      dispatch(
        changeNotification({
          NotificationText: "No selected team found",
          NotificationCode: "error",
        })
      );
    }
  };

export const addTeams = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: ADD_TEAM,
  });
};
export const handleChangeTeam =
  (payload: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: HANDLE_CHANGE_TEAM,
      payload,
    });
  };

//employee

export const selectItemEmployees =
  (teamId: string, id: string[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SELECTED_EMPLOYEE,
      payload: {
        teamId,
        id,
      },
    });
  };

export const deleteEmployee =
  (teamId: String) => async (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: {
        teamId,
      },
    });
  };

export const addEmployees =
  (teamId: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        teamId,
      },
    });
  };

export const handleChangeEmployee =
  (teamId: string, value: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: HANDLE_CHANGE_EMPLOYEE,
      payload: {
        teamId,
        value,
      },
    });
  };
