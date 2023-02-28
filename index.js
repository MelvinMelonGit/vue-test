const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'CRUD!',
        msg: '',
        tasks: [
            {id: 1, subject: 'english'},
            {id: 2, subject: 'math'}
        ]
      }
    },
    methods: {
        addTask() {
            this.tasks.push(
                {id: this.tasks.length +1, subject: this.msg}
            )
            this.msg = ''
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t=> t.id !== id)
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
                }
            })
        }
    },
    onmount() {
        this.tasks.forEach(t => {
                t.isEditing = false
                t.editMsg = ''
            }
        )
    }
  }).mount('#app')