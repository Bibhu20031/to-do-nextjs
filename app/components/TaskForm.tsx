
import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



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
    <div className='flex justify-center align-middle'>
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        placeholder="Task"
        required
        className='w-50'
      />
      <Textarea
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className='w-50'
      />
      <Button variant="outline" className='bg-blue-500 '>Add Task</Button>
    </form>
    </div>
  );
};

export default TaskForm;
