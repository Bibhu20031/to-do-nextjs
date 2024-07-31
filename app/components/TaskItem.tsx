// components/TaskItem.tsx
import { useState, ChangeEvent, MouseEvent } from 'react';

interface TaskItemProps {
  task: Task;
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

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>(task.task);
  const [updatedDescription, setUpdatedDescription] = useState<string>(task.description);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleUpdate = () => {
    onUpdateTask(task.id, { ...task, task: updatedTask, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUpdatedTask(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setUpdatedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.task}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onToggleComplete(task.id)}>Complete</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div>
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.updatedAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
