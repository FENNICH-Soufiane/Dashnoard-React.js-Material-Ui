import { Box, Button, Stack} from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../componenets/Header";

const Dashboard = () => {
  
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Header isDashboard={true} title={"DASHBOARD"} descTitle={"Welcome to your dashboard"} />


      <Box sx={{textAlign: "right"}}>
        <Button sx={{padding: "6px 8px", textTransform: "capitalize"}} variant="contained">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
