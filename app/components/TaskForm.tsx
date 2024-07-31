// app/components/TaskForm.tsx
import { useState, ChangeEvent, FormEvent } from 'react';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

interface Task {
  task: string;
  description: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask({ task, description });
    setTask('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        placeholder="Task"
        required
      />
      <textarea
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
