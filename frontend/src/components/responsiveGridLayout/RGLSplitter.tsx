import React, { ReactNode } from "react";
import {
  AVARAGE_EMPLOYEE_SCORE,
  DATAGRID,
  ORGANIZATION,
  TEAM_CORE_DETAILS,
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
  TEAM_EMPLOYEE,
  TEAM_OVERALL_SCORE,
  TEAM_TOTAL_EMPLOYEE,
  TEAM_EMPLOYEE_DETAIL,
} from "../../services/types/RGL";
import TeamCoreDetail from "../charts/TeamCoreDetail";
import Organiation from "../charts/Organization";
import ConfigureYourCompany from "../charts/ConfigureYourCompany";
import AvarageEmployeeScore from "../charts/AvarageEmployeeScore";
import CompletedCourse from "../charts/CompletedCourse";
import TotalEmployeeContainer from "../charts/TotalEmployees";
import TopEmployeesDataGrid from "../charts/TopEmplooyeDataGrid";
import TopSlillsDataGrid from "../charts/TopSkillDataGrid";
import TopEmployeesBar from "../charts/TopEmployeesBarChart";
import TopSlillsBar from "../charts/TopSkillsBarChart";
import TimeLine from "../charts/TimeLine";
import SkillDevelopmentContainerDg from "../charts/SkillInDevelopmentDataGrid";
import SkillDevelopmentContainerBar from "../charts/SkillInDevelopmentBar";
import InProgressCourse from "../charts/InProgressCourseDg";
import UpComingCourse from "../charts/UpCOmingCourseDg";
import TeamEmployee from "../charts/teams/TeamEmployee";
import TeamOveralScore from "../charts/teams/OverallScore";
import TeamTotalEmployee from "../charts/teams/TotalEmployee";
import TeamEmployeeDetails from "../charts/teams/EmployeeDetails";
interface PropsType {
  [key: string]: any;
}

const RGLSplitter: React.FC<PropsType> = React.forwardRef<
  HTMLDivElement,
  PropsType
>((props, ref) => {
  const {
    style,
    className,
    onMouseDown,
    onMouseUp,
    onTouchEnd,
    children,
    type,
    ...rest
  } = props;
  const [chartsWidth, setChartsWidth] = React.useState(style.width);
  const [chartsHeight, setChartsHeight] = React.useState(style.height);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChartsWidth(style.width);
      setChartsHeight(style.height);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [style.width, style.height]);

  return (
    <div
      ref={ref}
      style={{ ...style }}
      className={className || ""}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
    >
      {type === TEAM_CORE_DETAILS && (
        <TeamCoreDetail
          uuid={rest?.uuid}
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === ORGANIZATION && (
        <Organiation
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === DATAGRID && (
        <ConfigureYourCompany
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === AVARAGE_EMPLOYEE_SCORE && (
        <AvarageEmployeeScore
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === COMPLETED_COURSE && (
        <CompletedCourse
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === TOTAL_EMPLOYEE && <TotalEmployeeContainer />}
      {type === TOP_EMPLOYEE_DATAGRID && (
        <TopEmployeesDataGrid height={parseInt(chartsHeight)} />
      )}
      {type === TOP_SKILL_DATAGRID && (
        <TopSlillsDataGrid height={parseInt(chartsHeight)} />
      )}
      {type === TOP_EMPLOYEE_BAR && (
        <TopEmployeesBar
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === TOP_SKILL_BAR && (
        <TopSlillsBar
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === TIME_LINE && (
        <TimeLine
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === SKILLS_DEVELOPMENT_DATAGRID && (
        <SkillDevelopmentContainerDg height={parseInt(chartsHeight)} />
      )}
      {type === SKILLS_DEVELOPMENT_BAR && (
        <SkillDevelopmentContainerBar
          width={parseInt(chartsWidth)}
          height={parseInt(chartsHeight)}
        />
      )}
      {type === IN_PROGRESS_COURSE && (
        <InProgressCourse height={parseInt(chartsHeight)} />
      )}
      {type === UP_COMING_COURSE && (
        <UpComingCourse height={parseInt(chartsHeight)} />
      )}
      {type === TEAM_EMPLOYEE && (
        <TeamEmployee
          height={parseInt(chartsHeight)}
          width={parseInt(chartsWidth)}
          teamKod={props?.teamKod}
        />
      )}
      {type === TEAM_OVERALL_SCORE && (
        <TeamOveralScore
          height={parseInt(chartsHeight)}
          width={parseInt(chartsWidth)}
          teamKod={props?.teamKod}
        />
      )}
      {type === TEAM_TOTAL_EMPLOYEE && (
        <TeamTotalEmployee teamKod={props?.teamKod} />
      )}
      {type === TEAM_EMPLOYEE_DETAIL && (
        <TeamEmployeeDetails
          teamKod={props?.teamKod}
          uuid={props.uuid}
          height={parseInt(chartsHeight)}
          width={parseInt(chartsWidth)}
        />
      )}

      {children}
    </div>
  );
});

export default RGLSplitter;
