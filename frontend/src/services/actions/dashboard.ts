import {
  SET_ACTIVITY_HOURS,
  SET_GENERAL_COMPANY_STATUS,
  SET_IN_PROGRESS_COURSES,
  SET_SKILL_IN_DEVELOPMENT,
  SET_TEAMS,
  SET_TOP_EMPLOYEES,
  SET_TOP_SKILLS,
  SET_UPCOMING_COURSES,
} from "../types/redux";
import { AppDispatch } from "../../store/configureStore";

import DashboardService from "../api/dashboard";
import { changeNotification } from "./notification";
import { ActivityHoursType } from "../reducers/activityHours";
import { GeneralType } from "../reducers/general";
import { InProgressCoursesType } from "../reducers/inProgressCourses";
import { SkillsInDevelopmentType } from "../reducers/skillsInDevelopment";
import { TeamsType } from "../reducers/teams";
import { TopEmployeesType } from "../reducers/topEmployees";
import { TopSkillsType } from "../reducers/topSkills";
import { UpComingCourseType } from "../reducers/upcomingCourses";
import { addCreateDatagrid } from "./datagrid";
const __setActivityHours =
  (payload: ActivityHoursType[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_ACTIVITY_HOURS,
      payload,
    });
  };

const __setGeneralCompanyStatus =
  (
    avarageEmployeeScore: string,
    totalCompletedCourses: number,
    totalEmployees: number
  ) =>
  async (dispatch: AppDispatch) => {
    const payload: GeneralType = {
      avarageEmployeeScore,
      totalCompletedCourses,
      totalEmployees,
    };
    dispatch({
      type: SET_GENERAL_COMPANY_STATUS,
      payload,
    });
  };

const __setInProgressCourses =
  (payload: InProgressCoursesType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_IN_PROGRESS_COURSES,
      payload,
    });
  };

const __setSkillsInDevelopment =
  (payload: SkillsInDevelopmentType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SKILL_IN_DEVELOPMENT,
      payload,
    });
  };
const __setTeams = (payload: TeamsType) => async (dispatch: AppDispatch) => {
  dispatch({
    type: SET_TEAMS,
    payload,
  });
};
const __setTopEmployees =
  (payload: TopEmployeesType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_TOP_EMPLOYEES,
      payload,
    });
  };
const __setTopSkills =
  (payload: TopSkillsType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_TOP_SKILLS,
      payload,
    });
  };
const __setUpComingCourses =
  (payload: UpComingCourseType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_UPCOMING_COURSES,
      payload,
    });
  };

const __datapipe = (data: any) => async (dispatch: AppDispatch) => {
  console.log(data);
  dispatch(__setActivityHours(data.activity_hours));
  dispatch(
    __setGeneralCompanyStatus(
      data.average_employee_score,
      data.total_completed_courses,
      data.total_employees
    )
  );
  dispatch(__setInProgressCourses(data.in_progress_courses));
  dispatch(__setSkillsInDevelopment(data.skills_in_development));
  dispatch(__setTeams(data.teams));
  dispatch(addCreateDatagrid(data.teams));
  dispatch(__setTopEmployees(data.top_employees));
  dispatch(__setTopSkills(data.top_skills));
  dispatch(__setUpComingCourses(data.upcoming_courses));
};

export const fetchDashboard = () => async (dispatch: AppDispatch) => {
  try {
    let res = await DashboardService.getDashboards();
    dispatch(__datapipe(res.data.data));
    return Promise.resolve(res.status);
  } catch (err: any) {
    dispatch(
      changeNotification({
        NotificationText: "An error occurred while fetching data",
        NotificationCode: "error",
      })
    );
  }
};
