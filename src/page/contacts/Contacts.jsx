import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";

const Contacts = () => {
  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Contacts;
