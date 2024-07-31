'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation'; // Updated import for Next.js 14
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import tasksData from './data/data.json';

interface Task {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  updatedAt: string;
}

export default function Home() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasksData);

  useEffect(() => {
    if (searchQuery) {
      setFilteredTasks(tasks.filter(task => task.task.includes(searchQuery)));
    } else {
      setFilteredTasks(tasks);
    }
  }, [searchQuery, tasks]);

  const addTask = (newTask: Omit<Task, 'id' | 'completed' | 'updatedAt'>) => {
    const taskWithId: Task = {
      ...newTask,
      id: tasks.length + 1,
      completed: false,
      updatedAt: new Date().toISOString(),
    };
    setTasks([...tasks, taskWithId]);
  };

  const updateTask = (id: number, updatedTask: Task) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...updatedTask, updatedAt: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    const url = new URL(window.location.href);
    url.searchParams.set('search', newSearchQuery);
    window.history.pushState({}, '', url.toString());
    setFilteredTasks(tasks.filter(task => task.task.includes(newSearchQuery)));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks"
        onChange={handleSearch}
      />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}
