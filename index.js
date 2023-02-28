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
                {id: this.tasks.length +1, subject: this.msg}
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
                    t.editMsg = t.subject
                }
            })
        },
        confirmEdit(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing
                    t.subject = t.editMsg
                    t.editMsg = ''
                }
            })

            this.setStorage()
        },
        clearTasks() {
            this.tasks = []
            this.setStorage()
        },
        setStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    mounted() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    }
  }).mount('#app')