import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "pay bill", isFav: true },
      { id: 2, title: "get food", isFav: false },
      { id: 3, title: "get key", isFav: true },
    ],
    name: "Pinia Crash Tasks",
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.tasks.reduce((total, curCount) => {
        return curCount.isFav ? total + 1 : total;
      }, 0);
    },
    totalTasks: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      return this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    toggleFav(id) {
      const taskId = this.tasks.find((task) => task.id === id);
      taskId.isFav = !taskId.isFav;
    },
  },
});
