import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import Header from "../../componenets/Header";


const data = [
  {
    "id": "scala",
    "label": "scala",
    "value": 418,
    "color": "hsl(173, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 129,
    "color": "hsl(135, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 452,
    "color": "hsl(122, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 177,
    "color": "hsl(72, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 490,
    "color": "hsl(4, 70%, 50%)"
  }
]

// eslint-disable-next-line react/prop-types
const Pie = ({isDashboard = false}) => {

  const theme = useTheme()

  return (
    <Box sx={{height: isDashboard ? "220px" : "75vh"}}>
       <Header title={"PIE CHART"} descTitle={"Representation by Pie Chart"} />

      <ResponsivePie
        // @ts-ignore
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
                      "fill": theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 1
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
        margin={isDashboard ?{ top: 15, right: 40, bottom: 15, left: 40 } :{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={isDashboard ? false: true}
        enableArcLabels={isDashboard ? false:true }

        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
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
        legends={
          isDashboard ? [] :(

          
          [
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.palette.text.primary,//----------
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary,
                },
              },
            ],
          },
        ])}
      />
    </Box>
  );
};

export default Pie;
