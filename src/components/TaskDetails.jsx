// /* eslint-disable react/prop-types */
// import { useParams } from 'react-router-dom';

// export const TaskDetails = ({ tasksItems }) => {
//   const { id } = useParams();

//   // Buscar la tarea por ID
//   const task = tasksItems.find(task => task.id === id);

//   if (!task) {
//     return <div>Tarea no encontrada</div>;
//   }

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.content}</p>
//       <p>Fecha de creación: {task.date.toString()}</p>
//       <p>Estado: {task.done ? 'Completada' : 'Pendiente'}</p>
//     </div>
//   );
// };

// export default TaskDetails;
