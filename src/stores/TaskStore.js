import { defineStore } from "pinia";

const json_server_url = "http://localhost:3000/tasks";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
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
    async getTasks() {
      this.loading = true;

      const res = await fetch(json_server_url);
      const data = await res.json();

      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      this.tasks.push(task);

      const res = await fetch(json_server_url, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.error) console.error(res.error);
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });

      const res = await fetch(`${json_server_url}/${id}`, {
        method: "DELETE",
      });

      if (res.error) console.error(res.error);
    },
    async toggleFav(id) {
      const taskId = this.tasks.find((task) => task.id === id);
      taskId.isFav = !taskId.isFav;

      const res = await fetch(`${json_server_url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isFav: taskId.isFav }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.error) console.error(res.error);
    },
  },
});
