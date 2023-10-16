import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme, Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    { field: "name", headerName: "Name", width: 150, flex: 1 },
    { field: "email", headerName: "Email", width: 150, flex: 1 },
    { field: "age", headerName: "Age", width: 150, flex: 1 },
    { field: "phone", headerName: "Phone", width: 150, flex: 1 },
    {
      field: "access",
      headerName: "Access",
      width: 150,
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "user" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        // code for pagination (voir la documentation)
        {...rows}
        initialState={{
          // @ts-ignore
          ...rows.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
      
    </Box>
  );
};

export default Team;
