import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2} mt={3}>
      <Paper
        sx={{
          maxWidth: 900,
          flexGrow: 1,
          flexShrink: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59 342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1, minWidth: "250px", height:350, overflowY: "auto" }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transaction
          </Typography>
        </Paper>
        {Transactions.map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
            key={index}
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={600}>
                  {item.txId}
                </Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
              >
                $ {item.cost}
              </Typography>
            </Paper>
          );
            })}
      </Box>
    </Stack>
  );
};

export default Row2;
