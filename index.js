const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'My CRUD App!',
        textInput: '',
        data: [
            {id: 1, subject: 'english'},
            {id: 2, subject: 'math'},
            {id: 3, subject: 'science'},
        ]
      }
    },
    methods: {
        addItem() {
            this.data.push({
                id: this.data.length +1,
                subject: this.taskInput
            })
        }
    }
  }).mount('#app')