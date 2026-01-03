import type { Task } from "../types/task.types";
type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
};

function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onDeleteTask(task.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
