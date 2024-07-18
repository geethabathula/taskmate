import React, { useState } from "react";
import { Button, Popper, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function Instructions({ id }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const idPopper = open ? "simple-popper" : undefined;

  return (
    <div id={id}>
      <Button
        type="submit"
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          height: 45,
          width: 45,
        }}
      >
        <InfoIcon sx={{ color: "#FFA500" }} />
      </Button>
      <Popper id={idPopper} open={open} anchorEl={anchorEl} placement="top">
        <Paper sx={{ p: 2, maxWidth: 200 }}>
          <Typography variant="h6">Instructions</Typography>
          <Typography variant="body2">
            1. Click "Add Icon" to add a new task.
          </Typography>
          <Typography variant="body2">
            2. Click "Pencil Icon" to edit a task.
          </Typography>
          <Typography variant="body2">
            3. Click "Check Icon" to mark task as complete.
          </Typography>
          <Typography variant="body2">
            4. Click "Delete Icon" to delete a task.
          </Typography>
        </Paper>
      </Popper>
    </div>
  );
}

export default Instructions;
