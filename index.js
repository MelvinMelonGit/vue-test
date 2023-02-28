const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Tasks App',
        msg: '',
        tasks: []
      }
    },
    methods: {
        addTask() {
            if (!this.msg) return

            this.tasks.push(
                {id: this.tasks.length +1, task: this.msg, isEditing: false, editMsg: ''}
            )
            
            this.setStorage()

            this.msg = ''
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t=> t.id !== id)

            this.setStorage()
        },
        editTask(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing
                    t.editMsg = t.task
                }
            })
        },
        saveEdit(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    //update existing new task based on input
                    t.task = t.editMsg
                    t.editMsg = ''
                    t.isEditing = !t.isEditing
                }
            })

            this.setStorage()
        },
        cancelEdit(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing
                }
            })
        },
        clearTasks() {
            this.tasks = []
            localStorage.removeItem('tasks')
        },
        setStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    mounted() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    }
  }).mount('#app')