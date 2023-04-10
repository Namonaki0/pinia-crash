import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "pay bill", isFav: false },
      { id: 2, title: "get food", isFav: true },
      { id: 3, title: "get key", isFav: true },
    ],
    name: "Pinia Crash Tasks",
  }),
});
