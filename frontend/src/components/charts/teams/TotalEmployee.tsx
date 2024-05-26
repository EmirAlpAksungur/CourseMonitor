import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/configureStore";
import BasicValue from "../custom/BasicValue";
import "../../../assets/components/charts/basicContainer.scss";

const TotalEmployeeContainer: React.FC<{ teamKod: number }> = ({ teamKod }) => {
  const data = useAppSelector(
    (state: RootState) => state?.teams?.[teamKod]?.total_employee_count
  );
  return (
    <div className="completed-course">
      <div className="completed-course__title  grid-item__title">
        Total Employees
      </div>
      <div className="completed-course__basic-value">
        <BasicValue value={data} text="Total Employees" />
      </div>
    </div>
  );
};

export default TotalEmployeeContainer;
