import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import Organiation from "./highchart/Organization";

interface OrgType {
  width: number;
  height: number;
}
const Organization: React.FC<OrgType> = ({ width, height }) => {
  const teams = useAppSelector((state: RootState) => state?.teams);
  const [data, setData] = React.useState<any[] | boolean>(false);
  const [nodes, setNodes] = React.useState<any[]>([]);
  const dataPreProcess = async () => {
    let tempData: any[] = [];
    let tempNodes: any[] = [];
    for (let index = 0; index < teams.length; index++) {
      tempData.push(["Company", teams[index].title]);
      tempNodes.push({
        id: teams[index].title,
      });
      for (let k = 0; k < teams[index].employees.length; k++) {
        tempData.push([teams[index].title, teams[index].employees[k].name]);
        tempNodes.push({
          id: teams[index].employees[k].name,
          title: teams[index].employees[k].title,
          name: teams[index].employees[k].name,
          column: 2 + Math.trunc(index / 2),
        });
      }
    }
    setData(tempData);
    setNodes(tempNodes);
  };
  React.useEffect(() => {
    dataPreProcess();
  }, [teams]);
  return (
    <div className="organization-container">
      <div className="organization-container__header grid-item__title">
        Teams
      </div>
      <Organiation
        data={data}
        nodes={nodes}
        width={width}
        height={height - 32}
      />
    </div>
  );
};

export default Organization;
