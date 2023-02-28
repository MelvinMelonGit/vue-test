const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'CRUD!',
        msg: '',
        task: [
            {id: 1, subject: 'english', isEditing: false, editMsg: ''},
            {id: 2, subject: 'math', isEditing: false, editMsg: ''}
        ]
      }
    },
    methods: {
        addTask() {
            this.task.push(
                {id: this.task.length +1, subject: this.msg, isEditing: false, editMsg: ''}
            )
            this.msg = ''
        },
        deleteTask(id) {
            this.task = this.task.filter(t=> t.id !== id)
        },
        editTask(id) {
            this.task.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing   
                    t.editMsg = t.subject
                }
            })
        },
        confirmEdit(id) {
            this.task.forEach(t => {
                if (t.id === id) {
                    t.isEditing = !t.isEditing
                    t.subject = t.editMsg
                }
            })
        }
    }
  }).mount('#app')