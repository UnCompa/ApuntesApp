// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [], // Tu estado global inicial

  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  toggleTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useStore;
