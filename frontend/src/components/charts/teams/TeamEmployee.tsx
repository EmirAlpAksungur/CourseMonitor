import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/configureStore";
import Organization from "../highchart/Organization";
import "../../../assets/components/charts/basicContainer.scss";
interface TeamDetailsProps {
  height: number;
  width: number;
  teamKod: number;
}
const TeamDetails: React.FC<TeamDetailsProps> = (props) => {
  const team = useAppSelector(
    (state: RootState) => state?.teams?.[props.teamKod]
  );
  const [data, setData] = React.useState<any[] | boolean>(false);
  const [nodes, setNodes] = React.useState<any[]>([]);
  const dataPreProcess = async () => {
    let tempData: any[] = [];
    let tempNodes: any[] = [];
    for (let index = 0; index < team?.employees.length; index++) {
      tempData.push([team.title, team?.employees[index].name]);
      tempNodes.push({
        id: team?.employees[index].name,
      });
      for (
        let k = 0;
        k < team?.employees[index].skills_being_developed.length;
        k++
      ) {
        let temp = team?.employees[index].skills_being_developed[k];
        tempData.push([team?.employees[index].name, temp]);
        tempNodes.push({
          id: temp,
          name: temp,
          column: 2 + Math.trunc(index / 2),
        });
      }
    }
    setData(tempData);
    setNodes(tempNodes);
  };
  React.useEffect(() => {
    dataPreProcess();
  }, [team]);
  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Employees Developed Skills
      </div>
      <Organization
        data={data}
        nodes={nodes}
        width={props?.width}
        height={props?.height - 32}
      />
    </>
  );
};

export default TeamDetails;
