import { Box, Stack, useTheme } from "@mui/material";
import Card from "./Card";
import { EmailOutlined, PersonAdd, PointOfSale, TrafficOutlined } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";


const Row1 = () => {
  const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      gap={2}
      flexWrap={"wrap"}
      display={"flex"}
      // flexGrow={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Box flexGrow={1}>
        <Card icon={<EmailOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"12,361"} subTitle={"Emails Sent"} increase={"+14%"} data={data1} scheme={"accent"} />
      </Box>
      <Box flexGrow={1}>
        <Card icon={<PersonAdd sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"12,361"} subTitle={"Emails Sent"} increase={"+14%"} data={data2} scheme={"paired"} />
      </Box>
      <Box flexGrow={1}>
        <Card icon={<PointOfSale sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"12,361"} subTitle={"Emails Sent"} increase={"+14%"} data={data3} scheme={"set1"} />
      </Box>
      <Box flexGrow={1}>
        <Card icon={<TrafficOutlined sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"12,361"} subTitle={"Emails Sent"} increase={"+14%"} data={data4} scheme={"spectral"} />
      </Box>
      
    </Stack>
  );
};

export default Row1;
