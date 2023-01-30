<template>
  <div class="loading" v-if="taskStore.isLoading">
    Loading Tasks...
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore';

const taskStore = useTaskStore()
</script>

<style scoped>
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>