import { useState } from "react";
import { Box, TextField, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TaskCreate({ onTaskCreate }) {
  const [taskDesc, setTaskDesc] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskCreate(taskDesc);
    setTaskDesc(""); //clears the input
  };
  const handleTextChange = (event) => {
    setTaskDesc(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
          padding: "1rem",
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
              label="Add Task"
              variant="standard"
              onChange={handleTextChange}
              value={taskDesc}
              size="small"
              sx={{ marginRight: "2rem" }}
            />
            <Fab
              type="submit"
              color="primary"
              aria-label="add"
              sx={{
                height: "45px",
                width: "45px",
              }}
            >
              <AddIcon />
            </Fab>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default TaskCreate;
