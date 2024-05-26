import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/configureStore";
import Solid from "../highchart/Solid";
import "../../../assets/components/charts/teamCoreDetails.scss";

interface TeamOveralScoreProps {
  height: number;
  width: number;
  teamKod: number;
}

const OverallScore: React.FC<TeamOveralScoreProps> = ({
  height,
  width,
  teamKod,
}) => {
  const team = useAppSelector(
    (state: RootState) => state?.teams?.[teamKod]?.overall_score
  );

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Overall Score
      </div>
      <div className="completed-course__basic-value">
        <Solid
          width={width - 24}
          height={height - 76}
          credits={"Overall Score"}
          min={0}
          max={5}
          stops={[
            [0.1, "#DF5353"],
            [0.7, "#DDDF0D"],
            [0.9, "#55BF3B"],
          ]}
          data={parseFloat(team)}
        />
      </div>
    </>
  );
};

export default OverallScore;
