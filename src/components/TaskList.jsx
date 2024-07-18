import TaskDisplay from "./TaskDisplay";
import { Box } from "@mui/material";

function TaskList({ tasks, onEdit, onDelete }) {
  const renderedTasks = tasks.map((task) => {
    return (
      <TaskDisplay
        key={task.id}
        task={task}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "0",
          flexWrap: "wrap",
          margin: "2rem",
          padding: "1rem",
        }}
      >
        {renderedTasks}
      </Box>
    </>
  );
}

export default TaskList;
