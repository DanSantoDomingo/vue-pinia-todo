<template>
  <div class="task-list" v-for="task in taskStore.getTasksByFilter">
    <TaskDetail :task="task" />
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore';
import TaskDetail from "../components/TaskDetail.vue"

const taskStore = useTaskStore()
</script>

<style scoped>
.task-list {
  max-width: 640px;
  margin: 20px auto;
}

</style>