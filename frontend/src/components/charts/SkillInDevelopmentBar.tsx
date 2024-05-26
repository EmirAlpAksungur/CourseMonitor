import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import "../../assets/components/charts/basicContainer.scss";
import BarChart from "./highchart/BarChart";

const SkillDevelopmentContainer: React.FC<{
  height: number;
  width: number;
}> = ({ height, width }) => {
  const data = useAppSelector((state: RootState) => state?.skillsInDevelopment);
  const [series, setSeries] = React.useState<{ name: string; y: number }[]>([]);

  React.useEffect(() => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push({
        name: data[i].skill,
        y: data[i].employees,
      });
    }
    setSeries(temp);
  }, [data]);

  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Skill In Development
      </div>
      <div className="completed-course__basic-value">
        <BarChart
          width={width - 24}
          height={height - 60}
          yTitle={"Employees"}
          data={[
            {
              name: "Employees",
              colorByPoint: true,
              data: series,
            },
          ]}
        />
      </div>
    </>
  );
};

export default SkillDevelopmentContainer;
