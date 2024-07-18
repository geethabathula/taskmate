import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./index.css";
import axios from "axios";
import Instructions from "./components/Instructions";

const apiUrl =
  "https://taskmate-ywct.onrender.com/tasks" || "http://localhost:5000/tasks";

function App() {
  const currentYear = new Date().getFullYear();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // To Create the Task
  const handleTaskCreate = async (desc) => {
    if (!desc.trim()) {
      return;
    }
    const newTask = { taskDesc: desc };
    try {
      const response = await axios.post(apiUrl, newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error creating task", error);
    }
  };

  // To Edit Task by ID
  const handleTaskEdit = async (taskid, newTaskDesc) => {
    const modifiedTask = { taskDesc: newTaskDesc };
    try {
      const response = await axios.put(`${apiUrl}/${taskid}`, modifiedTask);
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskid) {
          return { ...task, ...response.data };
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error editing task", error);
    }
  };

  // To Delete the Task by ID
  const handleTaskDelete = async (taskid) => {
    try {
      await axios.delete(`${apiUrl}/${taskid}`);
      setTasks(tasks.filter((task) => task.id !== taskid));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box component="header" id="app">
        <Box>
          <Typography variant="h4">Taskmate</Typography>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <TaskCreate onTaskCreate={handleTaskCreate} />
        <TaskList
          tasks={tasks}
          onEdit={handleTaskEdit}
          onDelete={handleTaskDelete}
        />
      </Box>
      <Box component="div" id="stickyinstructions">
        <Instructions />
      </Box>

      <Box component="footer" id="app">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            <sup>&copy;&nbsp;</sup>
          </Typography>
          <Typography variant="body2">
            Geetha Supriya Bathula {currentYear}. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
