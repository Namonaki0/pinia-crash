<template>
    <form
        @submit.prevent="handleSubmit"
    >
        <input
            v-model="refTask"
            type="text"
            placeholder="enter task ..."
        >
        <button>Add</button>
    </form>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore";
import { ref } from 'vue';

    const taskStore = useTaskStore()

    const refTask = ref('')

    const handleSubmit = () => {
        if (refTask.value.length > 0) {
            taskStore.addTask({
                title: refTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 10000)
            })
            refTask.value = '';
        }
    }
</script>
