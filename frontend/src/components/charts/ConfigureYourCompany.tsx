import React from "react";

import Datagrid from "./datagrid/Main";
interface DatagridType {
  width: number;
  height: number;
}

const ConfigureYourCompany: React.FC<DatagridType> = ({ width, height }) => {
  return (
    <div className="organization-container">
      <div className="organization-container__header grid-item__title">
        Manage your teams and employees
      </div>
      <Datagrid width={width} height={height - 31.2} />
    </div>
  );
};

export default ConfigureYourCompany;
