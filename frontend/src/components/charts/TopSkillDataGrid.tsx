import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import "../../assets/components/charts/basicContainer.scss";
import DataGrid from "./datagrid/DefaultGrid";
const TotalEmployeeContainer: React.FC<{ height: number }> = ({ height }) => {
  const data = useAppSelector((state: RootState) => state?.topSkills);

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Top Skills
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

export default TotalEmployeeContainer;
