<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ name }}</h1>
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

    <!-- loading -->
    <div 
      v-if="loading"
      class="loading"
    >
        Loading tasks...
    </div>

    <!-- task list -->
        <div 
          v-if="filter === 'all'"
          class="task-list"
        >
        <p>You have {{ totalTasks }} remaining tasks</p>
          <div 
            v-for="task, i in tasks"
            :key="`task-${i}`"
          >
            <TaskDetails
              v-if="task"
              :task="task"
            />
          </div>
        </div>
        <div 
          v-else
          class="fav-task-list"
        >
          <p>You have {{ favCount }} favourite tasks</p>
          <div 
            v-for="task, i in favs"
            :key="`task-${i}`"
          >
            <TaskDetails
              v-if="task"
              :task="task"
            />
          </div>
        </div>

        <button
          @click.stop="taskStore.clearTasks"
        >
          Reset state
        </button>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue'

const filter = ref("all")

const taskStore = useTaskStore()

// fetch tasks
taskStore.getTasks();

const { tasks, loading, name, favs, favCount, totalTasks } = storeToRefs(taskStore)

</script>

