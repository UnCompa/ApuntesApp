// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { TaskCreator } from "../components/TaskCreator";
// import {Outlet } from "react-router-dom";

// // eslint-disable-next-line react/prop-types
// const Layout = ({children}) => {
//   const [tasksItems, setTasksItems] = useState([]);

//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks") ?? [];
//     if (savedTasks) {
//     //   setTasksItems(JSON.parse(savedTasks));
//     }
//   }, []);

//   // Efecto para guardar tareas en el localStorage cada vez que cambia el estado
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasksItems));
//   }, [tasksItems]);

//   const createTask = (newTask) => {
//     if (!tasksItems.find((task) => task.content === newTask.content)) {
//       setTasksItems([...tasksItems, newTask]);
//     }
//   };

//   return (
//     <div className="modelo">
//       <section className="[grid-area:create] border-r-4 border-black p-2">
//         <TaskCreator createTask={createTask} />
//       </section>
//       <section className="[grid-area:dashboard] p-4 overflow-y-auto bg-red-300">
//         <children />
//       </section>
//     </div>
//   );
// };

// export default Layout;
