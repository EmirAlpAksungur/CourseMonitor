import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../../hooks/redux";
import ChildToolbar from "./ChildToolbar";
import "../../../assets/components/charts/datagrid.scss";
import {
  handleChangeEmployee,
  selectItemEmployees,
} from "../../../services/actions/datagrid";
interface DatagridType {
  row: any;
}

const Main: React.FC<DatagridType> = ({ row }) => {
  const dispatch = useAppDispatch();

  const toolbar = () => {
    return <ChildToolbar parentId={row.uuid} />;
  };
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
        padding: "0 25px 25px 52px",
      }}
      className="datagrid-container datagrid-container-child"
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
        rows={row.employees ? row.employees : []}
        columns={[
          {
            field: "name",
            headerName: "Name",
            editable: true,
          },
          {
            field: "title",
            headerName: "Title",
            editable: true,
          },
          {
            field: "email",
            headerName: "Email",
            editable: true,
          },
          {
            field: "current_score",
            headerName: "Current Score",
            editable: false,
          },
          {
            field: "lessons_taken",
            headerName: "Lesson Taken",
            editable: false,
          },
        ]}
        slots={{
          toolbar: toolbar,
        }}
        onRowSelectionModelChange={(uuid: string[]) => {
          dispatch(selectItemEmployees(row.uuid, uuid));
        }}
        processRowUpdate={(updatedRow: any, originalRow: any) => {
          dispatch(handleChangeEmployee(row.uuid, updatedRow));
          return updatedRow;
        }}
        getRowId={(row: any) => row.uuid}
        disableIgnoreModificationsIfProcessingProps
        disableRowSelectionOnClick
        checkboxSelection={true}
      />
    </Box>
  );
};

export default Main;
