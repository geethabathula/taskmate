import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Fab, CardActionArea, CardActions } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskEdit from "./TaskEdit";

function TaskDisplay({ task, onEdit, onDelete }) {
  const [complete, setComplete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [disableCardActions, setDisableCardActions] = useState(false);

  const handleComplete = (event) => {
    setComplete(!complete);
  };
  const handleRemove = (taskid) => {
    onDelete(taskid);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
    setDisableCardActions(!disableCardActions);
    setComplete(!complete);
  };
  const handleSubmit = (taskid, newTaskDesc) => {
    setShowEdit(false);
    setDisableCardActions(false);
    setComplete(false);
    onEdit(taskid, newTaskDesc);
  };

  let content = `${task.taskDesc}`;
  if (showEdit) {
    content = <TaskEdit task={task} onSubmit={handleSubmit} />;
  }
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
        <Card sx={{ width: "20rem", height: "10rem", margin: "1rem" }}>
          <CardActionArea disableRipple disableTouchRipple>
            <CardContent sx={{ height: "6rem" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                style={{
                  textDecorationLine: complete ? "line-through" : "none",
                }}
              >
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              {disableCardActions ? (
                <></>
              ) : (
                <>
                  <Fab
                    type="submit"
                    color="success"
                    sx={{
                      margin: "0.2rem",
                      width: "35px",
                      height: "35px",
                    }}
                    disabled={complete}
                  >
                    <DoneIcon onClick={handleComplete} />
                  </Fab>
                  <Fab
                    type="submit"
                    color="info"
                    sx={{
                      margin: "0.2rem",
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <EditIcon onClick={() => handleEdit(task.id)} />
                  </Fab>
                  <Fab
                    type="submit"
                    color="error"
                    sx={{
                      margin: "0.2rem",
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <DeleteIcon onClick={() => handleRemove(task.id)} />
                  </Fab>
                </>
              )}
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default TaskDisplay;
