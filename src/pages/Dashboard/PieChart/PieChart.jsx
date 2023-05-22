import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import "../styles.css";

const PieChart = () => {
  const [activeLines, setActiveLines] = useState(["New Cases", "Old Cases"]);

const data = [
  {
    id: "New Cases",
    data: [
      {
        id: "scala1",
        label: "Scala",
        value: 105,
        color: "hsl(345, 70%, 50%)",
      },
      {
        id: "scala2",
        label: "Scala",
        value: 25,
        color: "hsl(345, 70%, 50%)",
      },
      {
        id: "scala3",
        label: "Scala",
        value: 55,
        color: "hsl(345, 70%, 50%)",
      },
      {
        id: "scala4",
        label: "Scala",
        value: 200,
        color: "hsl(345, 70%, 50%)",
      },
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
    <div style={{ width: "500px", height: "400px" }}>
      <ResponsivePie
        data={filteredData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: -70,
            translateY: 0,
            itemsSpacing: 10,
            itemWidth: 100,
            itemHeight: 20,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            onClick: handleLegendClick,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
