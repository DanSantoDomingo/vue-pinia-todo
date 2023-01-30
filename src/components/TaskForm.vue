<template>
  <div class="new-task-form">
    <form @submit.prevent="handleSubmit">
      <input 
        v-model.trim="newTask"
        type="text" 
        placeholder="I need to..." >
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

const taskStore = useTaskStore()
const newTask = ref("")
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      id: Math.floor(Math.random() * 10000),
      title: newTask.value,
      isFav: false,
    })
    newTask.value = ""
  }
}
</script>

<style scoped>
.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
</style>