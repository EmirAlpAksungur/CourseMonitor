import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import "../../assets/components/charts/basicContainer.scss";
import DataGrid from "./datagrid/DefaultGrid";
const UpComingCourse: React.FC<{ height: number }> = ({ height }) => {
  const data = useAppSelector((state: RootState) => state?.upcomingCourses);

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Up Coming Course
      </div>
      <div className="completed-course__basic-value">
        <DataGrid
          columns={[
            {
              field: "assigned_to",
              headerName: "Asigned To",
              editable: false,
            },
            {
              field: "due_date",
              headerName: "Date",
              editable: false,
            },
            {
              field: "status",
              headerName: "Status",
              editable: false,
            },
            {
              field: "title",
              headerName: "Title",
              editable: false,
            },
            {
              field: "description",
              headerName: "Description",
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

export default UpComingCourse;
