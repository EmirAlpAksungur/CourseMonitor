import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import React from "react";
import "../../../assets/components/charts/solid.scss";
highchartsMore(Highcharts);
exporting(Highcharts);
export const BarChart: React.FC<any> = ({
  width,
  height,
  data = [],
  yTitle = null,
  max,
  type = "bar",
}) => {
  const options = {
    chart: {
      type: type,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      max: max,

      title: {
        text: yTitle,
      },
      gridLineWidth: 1,
      endOnTick: false,
      startOnTick: false,
      ordinal: false,
    },
    credits: {
      enabled: false,
    },
    series: data,
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        ...options,
        chart: {
          ...options.chart,
          width: width,
          height: height,
        },
      }}
      containerProps={{ className: "bar-chart" }}
    />
  );
};

export default React.memo(BarChart);
