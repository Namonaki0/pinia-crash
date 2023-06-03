<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter list -->
    <nav class="filter">
      <button
        @click.stop="filter = 'all'"
      >
        All tasks
      </button>
      <button
        @click.stop="filter = 'favs'"
      >
        Favourite tasks
      </button>
    </nav>

    <!-- task list -->
        <div 
          v-if="filter === 'all'"
          class="task-list"
        >
        <p>You have {{ taskStore.totalTasks }} remaining tasks</p>
          <div 
            v-for="task, i in taskStore.tasks"
            :key="`task-${i}`"
          >
            <TaskDetails 
              :task="task"
            />
          </div>
        </div>
        <div 
          v-else
          class="fav-task-list"
        >
          <p>You have {{ taskStore.favCount }} favourite tasks</p>
          <div 
            v-for="task, i in taskStore.favs"
            :key="`task-${i}`"
          >
            <TaskDetails 
              :task="task"
            />
          </div>
        </div>
  </main>
</template>

<script setup>

import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue'
import { ref } from 'vue';

const filter = ref()

const taskStore = useTaskStore()
</script>

