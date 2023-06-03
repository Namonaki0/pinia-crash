<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons"
        @click.stop="taskStore.deleteTask(task.id)"
      >
        delete
    </i>
      <i 
        :class="['material-icons', { active: task.isFav }]"
        @click.stop="taskStore.toggleFav(task.id)"
      >
        favorite
      </i>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore"

const props = defineProps({
    task: {
        type: Object,
        default: () => ({})
    }
})

  const taskStore = useTaskStore()

</script>
