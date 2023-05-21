import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../styles.css";

const LineChart = () => {
  const [activeLines, setActiveLines] = useState(["New Cases", "Old Cases"]);

  const data = [
    {
      id: "New Cases",
      data: [
        { x: "Ahan", y: 15 },
        { x: "New", y: 60 },
        { x: "Old", y: 5 },
        { x: "Oldest", y: 30 },
        { x: "Newer", y: 10 },
        { x: "Bad", y: 0 },
        { x: "Better", y: 100 },
        { x: "Good", y: 50 },
      ],
    },
    {
      id: "Old Cases",
      data: [
        { x: "Ahan", y: 80 },
        { x: "New", y: 90 },
        { x: "Old", y: 50 },
        { x: "Oldest", y: 60 },
        { x: "Newer", y: 40 },
        { x: "Bad", y: 5 },
        { x: "Better", y: 25 },
        { x: "Good", y: 8 },
      ],
    },
  ];

  const handleLegendClick = (legend) => {
    const isActive = activeLines.includes(legend);

    if (isActive) {
      setActiveLines(activeLines.filter((line) => line !== legend));
    } else {
      setActiveLines([...activeLines, legend]);
    }
  };

  const filteredData = data.filter((d) => activeLines.includes(d.id));

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveLine
        data={filteredData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: 12,
            translateY: -23,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 4,
            symbolSize: 20,
            symbolShape: "circle",
            itemDirection: "left-to-right",
            itemTextColor: "#777",
            onClick: handleLegendClick,
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
