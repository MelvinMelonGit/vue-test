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
                {id: this.tasks.length +1, task: this.msg, isEditing: false, editMsg: '', prevMsg: ''}
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
                }
            })
        },
        saveEdit(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing
                    //store existing old task in prevMsg
                    t.prevMsg = t.task
                    //update existing new task based on input
                    t.task = t.editMsg
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
        revertTask(id) {
            this.tasks.forEach(t => {
                if (t.id === id) {
                    let oldTask = t.task
                    t.isEditing = !t.isEditing
                    //store prev old task in existing task
                    t.task = t.prevMsg
                    //update prevtask based on prev existing task
                    t.prevMsg = oldTask
                }
            })

            this.setStorage()
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