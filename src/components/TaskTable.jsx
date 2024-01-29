/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { TaskBox } from "./TaskBox";

export const TaskTable = ({ tasksItems, taskToggle, deleteTask}) => {



  return (
    <section>
      <h2 className="text-2xl font-bold block">Tareas</h2>
      <div className="grid grid-cols-3 gap-4">
      {tasksItems.map((task) => (
        <TaskBox task={task} taskToggle={taskToggle} key={task.name} />
      ))}
      </div>
      <div className="">Trash Icon</div>
    </section>
  );
};
