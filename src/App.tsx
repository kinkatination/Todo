import './App.css'
import { TodolistItem } from './TodolistItem';
import { nanoid } from 'nanoid';

export const App = () => {

const tasks1:  Task[] = [
    { id:  nanoid(), title: 'HTML&CSS', isDone: true },
    { id:  nanoid(), title: 'JS', isDone: true },
    { id:  nanoid(), title: 'ReactJS', isDone: false },
    { id:  nanoid(), title: 'Typescript', isDone: false },
    { id:  nanoid(), title: 'RTK query', isDone: false },
  ]
 
  const tasks2:  Task[] = [  ]

  return (
      <div className='app'>
        <TodolistItem title="What to learn" tasks={tasks1} date="28.10.2026"/>закоммитьэ
        <TodolistItem title="Songs" tasks={tasks2}/>
      </div>
  )
}

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

