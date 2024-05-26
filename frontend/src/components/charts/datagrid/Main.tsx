import React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/configureStore";
import ParentToolbar from "./ParentToolbar";
import ChildDataGrid from "./ChildDataGrid";
import "../../../assets/components/charts/datagrid.scss";
import {
  selectItemTeams,
  handleChangeTeam,
} from "../../../services/actions/datagrid";
interface DatagridType {
  width: number;
  height: number;
}

const Main: React.FC<DatagridType> = ({ width, height }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state?.datagrid?.gridItem);
  const getDetailPanelContent = React.useCallback(
    ({ row }: any) => <ChildDataGrid row={row} />,
    []
  );

  return (
    <Box
      sx={{
        button: {
          minWidth: "36px",
          height: "36px",
          borderRadius: "50px",
        },
        "& .MuiInputBase-input": {
          padding: "0px important",
        },
        "& .MuiDataGrid-cellContent": {
          fontSize: "1rem",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontSize: "1.1rem",
        },
        width: width,
        height: height,
        padding: "12px",
      }}
      className="datagrid-container"
    >
      <DataGridPro
        density="compact"
        defaultGroupingExpansionDepth={1}
        hideFooter={true}
        localeText={{
          toolbarColumns: "",
          toolbarFilters: "",
          toolbarDensity: "",
          toolbarExport: "",
        }}
        processRowUpdate={(updatedRow: any, originalRow: any) => {
          dispatch(handleChangeTeam(updatedRow));
          return updatedRow;
        }}
        rows={data ? data : []}
        columns={[
          {
            field: "title",
            headerName: "Title",
            editable: true,
            width: 150,
          },
          {
            field: "overall_score",
            headerName: "Overall Score",
            editable: false,
          },
          {
            field: "total_employee_count",
            headerName: "Total Employee Count",
            editable: false,
          },
          {
            field: "description",
            headerName: "Description",
            editable: true,
            flex: 1,
          },
        ]}
        slots={{
          toolbar: ParentToolbar,
        }}
        getRowId={(row: any) => row.uuid}
        disableIgnoreModificationsIfProcessingProps
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={() => "auto"}
        checkboxSelection={true}
        disableRowSelectionOnClick
        onRowSelectionModelChange={(uuid: string[]) => {
          dispatch(selectItemTeams(uuid));
        }}
        autoPageSize={true}
      />
    </Box>
  );
};

export default Main;
