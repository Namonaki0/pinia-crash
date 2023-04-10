<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>
        <div class="task-list">
          <div 
            v-for="task, i in taskStore.tasks"
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

const taskStore = useTaskStore()
</script>

