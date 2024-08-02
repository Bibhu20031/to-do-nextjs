
import { useState, ChangeEvent} from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
   <>
    <div className='flex justify-center align-middle gap-10'>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={updatedTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUpdatedTask(e.target.value)}
          />
          <Textarea
            value={updatedDescription}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setUpdatedDescription(e.target.value)}
          />
          <Button onClick={handleUpdate} className='text-blue-700'>Save</Button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.task}
          </span>
          <Button onClick={() => setIsEditing(true)} variant='secondary'>Edit</Button>
          <Button onClick={() => onToggleComplete(task.id)} variant='outline' className='bg-green-400'>Complete</Button>
          <Button onClick={() => onDeleteTask(task.id)} variant='destructive'>Delete</Button>
        </>
      )}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </Button>
      
   
    </div>
    {isExpanded && (
        <div >
          <p className=' flex justify-center '>{task.description}</p>
          <p className=' flex justify-center '>Last updated: {new Date(task.updatedAt).toLocaleString()}</p>
        </div>
      )}
    </>
  );
};

export default TaskItem;
