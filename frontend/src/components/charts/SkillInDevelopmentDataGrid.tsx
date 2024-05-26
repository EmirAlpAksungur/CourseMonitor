import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import DataGrid from "./datagrid/DefaultGrid";
import "../../assets/components/charts/basicContainer.scss";

const SkillDevelopmentContainer: React.FC<{ height: number }> = ({
  height,
}) => {
  const data = useAppSelector((state: RootState) => state?.skillsInDevelopment);

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Skills In Development
      </div>
      <div className="completed-course__basic-value">
        <DataGrid
          columns={[
            {
              field: "skill",
              headerName: "Skill",
              editable: false,
              flex: 1,
            },
            {
              field: "employees",
              headerName: "Employees",
              editable: false,
              flex: 2,
            },
          ]}
          rows={data}
          height={height - 62}
        />
      </div>
    </>
  );
};

export default SkillDevelopmentContainer;
