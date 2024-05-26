import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import timeline from "highcharts/modules/timeline.js";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import exporting from "highcharts/modules/exporting";

import "../../../assets/components/charts/solid.scss";
highchartsMore(Highcharts);
timeline(Highcharts);
exporting(Highcharts);
export const TimeLine: React.FC<any> = ({ width, height, data = [] }) => {
  const options = {
    chart: {
      zoomType: "x",
      type: "timeline",
    },
    xAxis: {
      type: "datetime",
      visible: false,
    },
    yAxis: {
      gridLineWidth: 1,
      title: null,
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },

    tooltip: {
      style: {
        width: 300,
      },
    },
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        dataLabels: {
          allowOverlap: false,
          format:
            '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
            "{point.x:%d %b %Y}</span><br/>{point.label}",
        },
        marker: {
          symbol: "circle",
        },
        data: data,
      },
    ],
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

export default React.memo(TimeLine);
