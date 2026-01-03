import { useState } from "react";
import TaskList from "./TaskList";
import { ThemeToggle } from "./ThemeToggle";

type Task = {
  id: number;
  title: string;
};

function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title }
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );
  };

  return (

    <div>
      <ThemeToggle/>
      <button onClick={() => addTask("New Task")}>
        Add Task
      </button>

      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskContainer;
