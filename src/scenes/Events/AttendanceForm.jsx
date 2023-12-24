import { Cancel } from "@mui/icons-material";
import {
  Select,
  Box,
  MenuItem,
  TextareaAutosize,
  InputLabel,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { Form } from "react-router-dom";

const AttendanceForm = (props) => {
  const [attendance, setAttendance] = useState({
    status: "Present",
    reason: "",
  });
  const handleStatusChange = useCallback((e) => {
    setAttendance({ status: e.target.value, reason: "" });
  }, []);
  const handleReasonChange = useCallback((e) => {
    setAttendance((pv) => ({ status: pv.status, reason: e.target.value }));
  });

  return (
    <Form
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputLabel id="select-attendance">Mark attendance</InputLabel>
        <IconButton onClick={props.closeOverlay}>
          <Cancel
            sx={{ color: "red", cursor: "pointer", marginLeft: "auto" }}
          />
        </IconButton>
      </Box>
      <Select
        required
        color="success"
        variant="filled"
        labelId="select-attendance"
        onChange={handleStatusChange}
        value={attendance.status}
        label="Mark Attendance"
      >
        <MenuItem value={"Present"}>Present</MenuItem>
        <MenuItem value={"Absent"}>Absent</MenuItem>
      </Select>
      <TextField
        disabled={attendance.status !== "Absent"}
        required
        label="Reason"
        value={attendance.reason}
        placeholder="Reason for not being present"
        onChange={handleReasonChange}
      />
      <Button variant="contained">Submit</Button>
    </Form>
  );
};

export default AttendanceForm;