import * as React from "react";

import { IconButton } from "@mui/material";

import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid-pro";

import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../hooks/redux";
import { Tooltip } from "@mui/material";
import "../../../assets/components/charts/datagrid.scss";
import {
  addEmployees,
  deleteEmployee,
} from "../../../services/actions/datagrid";
interface CustomToolbarProps {
  parentId: string;
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({ parentId }) => {
  const dispatch = useAppDispatch();
  return (
    <GridToolbarContainer>
      <Tooltip title={"New Employee"}>
        <IconButton
          onClick={() => {
            dispatch(addEmployees(parentId));
          }}
          className="MuiButton-icon "
        >
          <AddBoxIcon className="action-menu-icon" />
        </IconButton>
      </Tooltip>

      <Tooltip title={"Delete Employee"}>
        <IconButton
          className="MuiButton-icon "
          onClick={() => {
            dispatch(deleteEmployee(parentId));
          }}
        >
          <DeleteIcon className="action-menu-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Filter"}>
        <GridToolbarFilterButton className="action-menu-icon" />
      </Tooltip>
      <Tooltip title={"Columns"}>
        <GridToolbarColumnsButton className="action-menu-icon" />
      </Tooltip>
      <Tooltip title={"Density"}>
        <GridToolbarDensitySelector className="action-menu-icon" />
      </Tooltip>
      <Tooltip title={"Export"}>
        <GridToolbarExport className="action-menu-icon" />
      </Tooltip>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
