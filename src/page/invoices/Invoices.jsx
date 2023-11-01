import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../componenets/Header";

const Invoices = () => {
  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto" }}>
       <Header title={"INVOICES"} descTitle={"List of Invoice Balances"} />

      <DataGrid
      checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
