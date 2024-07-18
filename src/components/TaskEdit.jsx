import { useState } from "react";
import { Box, TextField, Fab } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function TaskEdit({ task, onSubmit }) {
  const [editDesc, setEditDesc] = useState(task.taskDesc);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, editDesc);
  };
  const handleEdit = (event) => {
    setEditDesc(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "25rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              label="Edit Task"
              variant="standard"
              size="small"
              sx={{ marginRight: "1rem" }}
              onChange={handleEdit}
              value={editDesc}
            />
            <button
              type="submit"
              style={{ background: "none", border: "none" }}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  marginTop: "0.8rem",
                  height: "25px",
                  width: "25px",
                }}
              />
            </button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default TaskEdit;
