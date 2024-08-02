
import TaskItem from './TaskItem';


interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (id: number, updatedTask: Task) => void;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

interface Task {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  updatedAt: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="text-white">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
