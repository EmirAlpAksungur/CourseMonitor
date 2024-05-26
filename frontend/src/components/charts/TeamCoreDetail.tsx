import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import Solid from "./highchart/Solid";
import "../../assets/components/charts/teamCoreDetails.scss";
import { Avatar, Tooltip } from "@mui/material";
interface TeamCoreDetailType {
  uuid: string;
  height: number;
  width: number;
}

const TeamCoreDetail: React.FC<TeamCoreDetailType> = ({
  uuid,
  height,
  width,
}) => {
  const data = useAppSelector((state: RootState) => state?.teams?.[uuid]);

  return (
    <div className="team-core-details">
      <div className="team-core-details__title  grid-item__title">
        {data?.title}
      </div>
      <div className="team-core-details__overall-score">
        <Solid
          width={width - 24}
          height={height - 100}
          credits={"Overall Score"}
          min={0}
          max={5}
          stops={[
            [0.1, "#DF5353"],
            [0.7, "#DDDF0D"],
            [0.9, "#55BF3B"],
          ]}
          data={parseFloat(data?.overall_score)}
        />
      </div>
      <div className="team-core-details__employees">
        {data?.employees.map((e: any, i: number) => {
          return (
            <Tooltip key={i} title={e.name}>
              <Avatar className="team-core-details__employees__item">
                {e.name.split(" ").map((word: string) => word[0])}
              </Avatar>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCoreDetail;
