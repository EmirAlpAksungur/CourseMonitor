import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/configureStore";
import Solid from "../highchart/Solid";
import BarChart from "../highchart/BarChart";
import { Chip } from "@mui/material";
import "../../../assets/components/charts/employeeDetails.scss";
interface EmployeeDetailsProps {
  teamKod: number;
  uuid: number;
  height: number;
  width: number;
}
const color = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "grays",
];
const EmployeeDetails: React.FC<EmployeeDetailsProps> = (props) => {
  const employee = useAppSelector(
    (state: RootState) => state?.teams?.[props.teamKod]?.employees?.[props.uuid]
  );
  return (
    <div className="employee-details">
      <div className="employee-details__title  grid-item__title">
        {employee?.name}
        <div className="employee-details__title__title  grid-item__title">
          {employee?.title}
        </div>
        <div className="employee-details__title__email  grid-item__title">
          {employee?.email}
        </div>
      </div>
      <div className="employee-details__current-score">
        <Solid
          width={((props.width - 24) / 3) * 2}
          height={props.height - 140}
          credits={"Current Score"}
          min={0}
          max={5}
          stops={[
            [0.1, "#DF5353"],
            [0.7, "#DDDF0D"],
            [0.9, "#55BF3B"],
          ]}
          data={employee?.current_score}
        />
        <BarChart
          width={(props.width - 24) / 3}
          height={props.height - 140}
          yTitle={""}
          max={12}
          type={"column"}
          data={[
            {
              name: "Lessons Taken",
              colorByPoint: true,
              data: [
                {
                  name: "Lessons Taken",
                  y: employee?.lessons_taken,
                },
              ],
            },
          ]}
        />
      </div>
      <div className="employee-details__skills">
        {employee?.skills_being_developed?.map((e: any, i: number) => {
          return (
            <Chip
              key={i}
              variant="outlined"
              className={`employee-details__skills__item employee-details__skills__item-${
                color?.[Math.floor(Math.random() * 7)]
              }`}
              label={e}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeDetails;
