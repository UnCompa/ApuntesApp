import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";

// import { useEffect } from "react";

export const App = () => {
  const [tasksItems, setTasksItems] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks') ?? [];
    if (savedTasks) {
      setTasksItems(JSON.parse(savedTasks))
    }
  },[ ])

  // Efecto para guardar tareas en el localStorage cada vez que cambia el estado
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);
  
  const taskToggle = (taskName) => {
    setTasksItems(
      tasksItems.map((task) =>
        task.content == taskName.content ? { ...task, done: !task.done } : task
      )
    );
  };
  const createTask = (newTask) => {
    if (!tasksItems.find((task) => task.content === newTask)) {
        setTasksItems([...tasksItems, newTask]);
    }
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasksItems.filter((task) => task.id !== taskId);
    setTasksItems(updatedTasks);
  }
  return (
    <div>
      <main className="modelo">
        <section className="[grid-area:create] border-r-4 border-black p-2">
        <TaskCreator createTask={createTask} />
        </section>
        <section className="[grid-area:dashboard] p-4 overflow-y-auto bg-red-300">
        <TaskTable tasksItems={tasksItems} taskToggle={taskToggle} deleteTask={deleteTask}/>
        </section>
      </main>
    </div>
  );
};

export default App;
