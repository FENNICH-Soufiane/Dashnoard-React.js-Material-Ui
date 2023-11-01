import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({title, descTitle, isDashboard= false}) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 1 : 3}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{descTitle}</Typography>
    </Box>
  );
};

export default Header;
