import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Header from "../../componenets/Header";

// eslint-disable-next-line react/prop-types
const Line = ({isDashboard = false}) => {
  const theme = useTheme()
  const data = [
    {
      id: "japan",
      color: "hsl(202, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 268,
        },
        {
          x: "helicopter",
          y: 41,
        },
        {
          x: "boat",
          y: 55,
        },
        {
          x: "train",
          y: 119,
        },
        {
          x: "subway",
          y: 148,
        },
        {
          x: "bus",
          y: 184,
        },
        {
          x: "car",
          y: 135,
        },
        {
          x: "moto",
          y: 32,
        },
        {
          x: "bicycle",
          y: 201,
        },
        {
          x: "horse",
          y: 31,
        },
        {
          x: "skateboard",
          y: 98,
        },
        {
          x: "others",
          y: 137,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(251, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 90,
        },
        {
          x: "helicopter",
          y: 294,
        },
        {
          x: "boat",
          y: 126,
        },
        {
          x: "train",
          y: 167,
        },
        {
          x: "subway",
          y: 49,
        },
        {
          x: "bus",
          y: 280,
        },
        {
          x: "car",
          y: 263,
        },
        {
          x: "moto",
          y: 2,
        },
        {
          x: "bicycle",
          y: 298,
        },
        {
          x: "horse",
          y: 271,
        },
        {
          x: "skateboard",
          y: 155,
        },
        {
          x: "others",
          y: 269,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(20, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 132,
        },
        {
          x: "helicopter",
          y: 83,
        },
        {
          x: "boat",
          y: 111,
        },
        {
          x: "train",
          y: 245,
        },
        {
          x: "subway",
          y: 202,
        },
        {
          x: "bus",
          y: 59,
        },
        {
          x: "car",
          y: 67,
        },
        {
          x: "moto",
          y: 75,
        },
        {
          x: "bicycle",
          y: 267,
        },
        {
          x: "horse",
          y: 201,
        },
        {
          x: "skateboard",
          y: 6,
        },
        {
          x: "others",
          y: 130,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(356, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 176,
        },
        {
          x: "helicopter",
          y: 10,
        },
        {
          x: "boat",
          y: 227,
        },
        {
          x: "train",
          y: 93,
        },
        {
          x: "subway",
          y: 12,
        },
        {
          x: "bus",
          y: 12,
        },
        {
          x: "car",
          y: 88,
        },
        {
          x: "moto",
          y: 224,
        },
        {
          x: "bicycle",
          y: 247,
        },
        {
          x: "horse",
          y: 42,
        },
        {
          x: "skateboard",
          y: 3,
        },
        {
          x: "others",
          y: 171,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(24, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 91,
        },
        {
          x: "helicopter",
          y: 166,
        },
        {
          x: "boat",
          y: 20,
        },
        {
          x: "train",
          y: 153,
        },
        {
          x: "subway",
          y: 51,
        },
        {
          x: "bus",
          y: 252,
        },
        {
          x: "car",
          y: 156,
        },
        {
          x: "moto",
          y: 91,
        },
        {
          x: "bicycle",
          y: 282,
        },
        {
          x: "horse",
          y: 115,
        },
        {
          x: "skateboard",
          y: 293,
        },
        {
          x: "others",
          y: 282,
        },
      ],
    },
  ];
  return (
    <Box sx={{ height: isDashboard ? "280px": "75vh" }}>
       <Header title={"LINE CHART"} descTitle={"Representation by Line Chart"} />

      <ResponsiveLine
        data={data}
        theme={{
          // "background": "#ffffff",
          // @ts-ignore
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "axis": {
              "domain": {
                  "line": {
                      "stroke": theme.palette.divider,
                      "strokeWidth": 1
                  }
              },
              "legend": {
                  "text": {
                      "fontSize": 12,
                      "fill": theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": theme.palette.divider,
                      "strokeWidth": 1
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": theme.palette.text.secondary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 0
              }
          },
          "legends": {
              "title": {
                  "text": {
                      "fontSize": 11,
                      "fill": theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              },
              "ticks": {
                  "line": {},
                  "text": {
                      "fontSize": 10,
                      "fill": theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "annotations": {
              "text": {
                  "fontSize": 13,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              }
          },
          "tooltip": {
              "container": {
                  "background": theme.palette.background.default,
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
      }}
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
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -44,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
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
    </Box>
  );
};

export default Line;
