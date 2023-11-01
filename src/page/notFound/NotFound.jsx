import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
    const theme = useTheme()
  return (
    <Box>
      <Typography align="center" variant="h5" color={theme.palette.error.main}>
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;
