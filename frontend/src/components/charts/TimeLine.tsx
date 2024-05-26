import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import "../../assets/components/charts/basicContainer.scss";
import TimeLine from "./highchart/TimeLine";

const activity = (props: any): String => {
  return `
          <span>Completed Examps:</span><span>${props.exams_completed}</span>
          <br/>
          <span>Hours:</span><span>${props.hours}</span>
          <br/>
          <span>Lesson Taken:</span><span>${props.lessons_taken}</span>
      `;
};
const TimeLineContainer: React.FC<{ height: number; width: number }> = ({
  height,
  width,
}) => {
  const activityHours = useAppSelector(
    (state: RootState) => state?.activityHours
  );
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    let i = 0;
    let temp = [];
    for (i; i < activityHours.length; i++) {
      let date = activityHours[i].date.split("-");
      temp.push({
        x: Date.UTC(parseInt(date[0]), parseInt(date[1]), parseInt(date[2])),
        name: activityHours[i].title,
        label: activityHours[i].title,
        description: activity(activityHours[i]),
      });
    }
    setData(temp);
  }, [activityHours]);
  return (
    <>
      <div className="completed-course__title  grid-item__title">
        Activity Line
      </div>
      <div className="completed-course__basic-value">
        <TimeLine height={height - 60} width={width - 24} data={data} />
      </div>
    </>
  );
};

export default TimeLineContainer;
