import { Task } from "./App";
import { Button } from "./Button";

export const TodolistItem = ({ title, tasks, date }: TodolistItemProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {/* <div>
      <input />
      <button>+</button>
    </div> */}
      {tasks.length === 0 ? (
        <p> There is no task</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />{" "}
                <span>{task.title}</span>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} />
      </div>
      <div>{date}</div>
    </div>
  );
};

type TodolistItemProps = {
  title: string;
  tasks: Task[];
  date?: string;
};
