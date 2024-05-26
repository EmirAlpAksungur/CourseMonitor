import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import BasicValue from "./custom/BasicValue";
import "../../assets/components/charts/basicContainer.scss";

interface AvarageEmployeeType {
  height: number;
  width: number;
}

const AvarageEmployeeContainer: React.FC<AvarageEmployeeType> = ({
  height,
  width,
}) => {
  const data = useAppSelector(
    (state: RootState) => state?.general?.totalCompletedCourses
  );
  return (
    <div className="completed-course">
      <div className="completed-course__title  grid-item__title">
        Completed Course
      </div>
      <div className="completed-course__basic-value">
        <BasicValue value={data} text="Completed Course" />
      </div>
    </div>
  );
};

export default AvarageEmployeeContainer;
