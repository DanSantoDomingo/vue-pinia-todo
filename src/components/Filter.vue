<template>
  <nav class="filter">
    <button @click="taskStore.setFilter('all')">All Tasks</button>
    <button @click="taskStore.setFilter('favs')">Favorite Tasks</button>
  </nav>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore"
const taskStore = useTaskStore()

</script>

<style scoped>
.filter {
  width: 640px;
  margin: 10px auto;
  text-align: right;
}
.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
  font-size: 1em;
}
</style>