import { defineStore } from "pinia";


export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    filter: "all",
    isLoading: false,
  }),
  getters: {
    favs: (state) => {
      return state.tasks.filter(t => t.isFav)
    },
    favCount: (state) => {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    },
    getTasksByFilter: (state) => {
      if (state.filter === "favs") {
        // return state.tasks.filter(t => t.isFav)
        return state.favs
      }
      return state.tasks
    }
  },
  actions: {
    async getTasks() {
      this.isLoading = true
      const res = await fetch("http://localhost:3000/tasks")
      const data = await res.json()
      this.tasks = data
      this.isLoading = false
    },
    setFilter(filter) {
      this.filter = filter
    },
    async addTask(task) {
      this.tasks.push(task)
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {"Content-Type": "application/json"}
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find(t => t.id === id)
      task.isFav = !task.isFav

      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({isFave: task.isFav}),
        headers: {"Content-Type": "application/json"}
      })

      if (res.error) {
        console.log(res.error)
      }
    }
  }
})