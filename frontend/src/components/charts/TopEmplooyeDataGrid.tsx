import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import DataGrid from "./datagrid/DefaultGrid";
import "../../assets/components/charts/basicContainer.scss";

const TotalEmployeeContainer: React.FC<{ height: number }> = ({ height }) => {
  const data = useAppSelector((state: RootState) => state?.topEmployees);

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Top Employees
      </div>
      <div className="completed-course__basic-value">
        <DataGrid
          columns={[
            {
              field: "name",
              headerName: "Name",
              editable: false,
              flex: 1,
            },
            {
              field: "title",
              headerName: "Title",
              editable: false,
              flex: 2,
            },
            {
              field: "email",
              headerName: "Email",
              editable: false,
              flex: 2,
            },
            {
              field: "current_score",
              headerName: "Current Score",
              editable: false,
              flex: 1,
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
