import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import "../../../assets/components/charts/solid.scss";
highchartsMore(Highcharts);
solidGauge(Highcharts);
export const Solid: React.FC<any> = ({
  width,
  height,
  credits = false,
  data = 0,
  min = 0,
  max = 100,
  stops = [
    [0.1, "#55BF3B"],
    [0.5, "#DDDF0D"],
    [0.9, "#DF5353"],
  ],
}) => {
  const options = {
    chart: {
      type: "solidgauge",
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    pane: {
      center: ["50%", "80%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: "transparent",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      ],
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      min: min,
      max: max,
      stops: stops,
      lineWidth: 0,
      tickWidth: 0,
      //   minorTickInterval: null,
      //   tickAmount: 2,
      title: {
        y: 70,
      },
      labels: {
        y: 16,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
          format: `<div style="text-align:center"><span class="solid-chart__plot-options">{y}</span><br/> 
            <div style="text-align:center"><span class="solid-chart__credits">${credits}</span><br/>`,
        },
      },
    },
    series: [
      {
        data: [data],
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
      containerProps={{ className: "solid-chart" }}
    />
  );
};

export default React.memo(Solid);
