import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import Solid from "./highchart/Solid";
import "../../assets/components/charts/teamCoreDetails.scss";

interface AvarageEmployeeType {
  height: number;
  width: number;
}

const AvarageEmployeeContainer: React.FC<AvarageEmployeeType> = ({
  height,
  width,
}) => {
  const data = useAppSelector(
    (state: RootState) => state?.general?.avarageEmployeeScore
  );

  return (
    <div className="completed-course">
      <div className="completed-course__title  grid-item__title">
        Avarage Employee Score
      </div>
      <div className="completed-course__basic-value">
        <Solid
          width={width - 24}
          height={height - 76}
          credits={"Avarage Employee Score"}
          min={0}
          max={5}
          stops={[
            [0.1, "#DF5353"],
            [0.7, "#DDDF0D"],
            [0.9, "#55BF3B"],
          ]}
          data={parseFloat(data)}
        />
      </div>
    </div>
  );
};

export default AvarageEmployeeContainer;
