import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../componenets/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhone =
    /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/;

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => {
    console.log("done");
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
       <Header title={"FORM"} descTitle={"Form for Registration"} />

      <Stack direction="row" sx={{ gap: 3 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "Field required & min 3." : null}
          {...register("firstName", { required: true, minLength: 3 })}
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Field required & min 3." : null}
          {...register("lastName", { required: true, minLength: 3 })}
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Email invalid." : null}
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "phone invalid." : null}
        {...register("phone", {
          required: true,
          pattern: regPhone,
        })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          // @ts-ignore
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created succesfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
