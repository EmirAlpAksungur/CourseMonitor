import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import sankey from "highcharts/modules/sankey.js";
import organization from "highcharts/modules/organization.js";
import HighchartsReact from "highcharts-react-official";
import accessibility from "highcharts/modules/accessibility";
import React from "react";
import exporting from "highcharts/modules/exporting";

import "../../../assets/components/charts/organization.scss";
highchartsMore(Highcharts);
accessibility(Highcharts);
sankey(Highcharts);
organization(Highcharts);
exporting(Highcharts);

export const Solid: React.FC<any> = ({ width, height, data, nodes }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "organization",
          inverted: true,
          width: width,
          height: height,
        },
        title: {
          text: "",
        },
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: true,
        },

        series: [
          {
            type: "organization",
            name: "",
            keys: ["from", "to"],
            data: data,
            levels: [
              {
                level: 0,
                color: "#d32f2f",
                height: 25,
              },
              {
                level: 1,
                color: "#F57C00",
              },
              {
                level: 2,
                color: "#007AD0",
              },
              {
                level: 3,
                color: "#359154",
              },
            ],
            nodes: nodes,
            colorByPoint: false,
            color: "#007ad0",
            dataLabels: {
              color: "white",
            },
            borderColor: "white",
            nodeWidth: "auto",
          },
        ],
        tooltip: {
          outside: true,
        },
      }}
      containerProps={{ className: "organization" }}
    />
  );
};

export default React.memo(Solid);
