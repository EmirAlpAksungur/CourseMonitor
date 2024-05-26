import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../../assets/components/charts/datagrid.scss";

import { uuidv4 } from "../../../services/utils/uuidv4";
interface DatagridType {
  rows: any;
  columns: any;
  height: number;
}

const Main: React.FC<DatagridType> = ({ rows, columns, height }) => {
  return (
    <Box
      sx={{
        button: {
          minWidth: "36px",
          height: "36px",
          borderRadius: "50px",
        },
        width: "100%",
        height: height,
        "& .MuiInputBase-input": {
          padding: "0px important",
        },
        "& .MuiDataGrid-cellContent": {
          fontSize: "1rem",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontSize: "1.1rem",
        },
      }}
      className="datagrid-container-top-list"
    >
      <DataGrid
        density="compact"
        defaultGroupingExpansionDepth={1}
        hideFooter={true}
        localeText={{
          toolbarColumns: "",
          toolbarFilters: "",
          toolbarDensity: "",
          toolbarExport: "",
        }}
        rows={rows}
        columns={columns}
        getRowId={(row: any, i: number) => uuidv4()}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};
const areEqual = (prevProps: DatagridType, nextProps: DatagridType) => {
  return (
    prevProps.rows.length === nextProps.rows.length &&
    prevProps.columns.length === nextProps.columns.length &&
    prevProps.height === nextProps.height
  );
};

export default React.memo(Main, areEqual);
