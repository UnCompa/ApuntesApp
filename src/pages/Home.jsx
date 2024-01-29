/* eslint-disable react/prop-types */
import { TaskCreator } from "./../components/TaskCreator";
import { TaskTable } from "./../components/TaskTable";
export const Home = ({taskToggle, createTask, deleteTask, tasksItems}) => {
  return (
    <div>
      <main className="modelo">
        <section className="[grid-area:create] border-r-4 border-black p-2">
          <TaskCreator createTask={createTask} />
        </section>
        <section className="[grid-area:dashboard] p-4 overflow-y-auto bg-red-300">
          <TaskTable
            tasksItems={tasksItems}
            taskToggle={taskToggle}
            deleteTask={deleteTask}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;