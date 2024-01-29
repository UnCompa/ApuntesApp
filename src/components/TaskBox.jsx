/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';

export const TaskBox = ({ task, taskToggle, deleteTask }) => {
  return (
    <>
        <div className="bg-zinc-50 shadow my-2 p-2" key={task.id}>
          <h3 className="text-xl font-bold">{task.title}</h3>
          <h5 className="text-lg font-bold">{task.date}</h5>
          <p>{task.content}</p>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => taskToggle(task)}
          />
          <div
            className="text-center bg-red-500 cursor-pointer"
            onClick={() => deleteTask(task.id)} // Pasa el id de la tarea a eliminar
          >
            Trash Icon
          </div>
        </div>
    </>
  );
};
