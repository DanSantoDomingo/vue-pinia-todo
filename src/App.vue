<template>
  <main>
    <!-- heading -->
    <Nav />

    <!-- task form -->
    <TaskForm />
    
    <!-- filter -->
    <Filter />
    
    <!-- loader -->
    <Loader />
    
    <TaskList />

  </main>
</template>

<script setup>

import Nav from "./components/Nav.vue"
import Filter from "./components/Filter.vue"
import TaskForm from "./components/TaskForm.vue"
import Loader from "./components/Loader.vue"
import TaskList from "./components/TaskList.vue"
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore()
taskStore.getTasks()
</script>
