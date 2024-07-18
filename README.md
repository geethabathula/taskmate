# Taskmate

Taskmate is a simple task management application built with React and Material-UI. It uses `json-server` to provide a RESTful API for data persistence.

## Features

- Create, edit, and delete tasks
- Persistent data storage using `json-server`
- Responsive and user-friendly UI

## Prerequisites

- Node.js and npm installed
- `json-server` installed globally or locally in your project
  npm install -g json-server

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/taskmate.git
   cd taskmate
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the JSON server:

   ```sh
   npm run server
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`.

## API Endpoints

The application uses the following API endpoints provided by `json-server`:

- `GET /tasks`: Retrieve all tasks
- `POST /tasks`: Create a new task
- `PATCH /tasks/:id`: Edit an existing task
- `DELETE /tasks/:id`: Delete a task

### Example Requests

#### Get All Tasks

```sh
curl -X GET http://localhost:5000/tasks
```

#### Create a New Task

```sh
curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d '{"taskDesc": "New Task"}'

```

#### Edit a Task

```sh
curl -X PATCH http://localhost:5000/tasks/{taskid} -H "Content-Type: application/json" -d '{"taskDesc": "Updated Task"}'

```

#### Delete a Task

```sh
curl -X DEL http://localhost:5000/tasks/{taskid}
```
