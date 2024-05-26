import * as React from "react";

import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../../hooks/redux";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid-pro";

import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import { Tooltip } from "@mui/material";
import { changeNotification } from "../../../services/actions/notification";
import { addTeams, deleteTeams } from "../../../services/actions/datagrid";
import "../../../assets/components/charts/datagrid.scss";
const CustomToolbar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <GridToolbarContainer>
      <Tooltip title={"New Team"}>
        <IconButton
          onClick={() => {
            dispatch(addTeams());
          }}
          className="MuiButton-icon "
        >
          <AddBoxIcon className="action-menu-icon" />
        </IconButton>
      </Tooltip>

      <Tooltip title={"Delete Team"}>
        <IconButton
          className="MuiButton-icon "
          onClick={() => {
            dispatch(deleteTeams());
          }}
        >
          <DeleteIcon className="action-menu-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Save All Changes"}>
        <IconButton
          onClick={() => {
            dispatch(
              changeNotification({
                NotificationText:
                  "The required endpoint for saving was not found",
                NotificationCode: "error",
              })
            );
          }}
          className="MuiButton-icon "
        >
          <SaveIcon className="action-menu-icon" />
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
