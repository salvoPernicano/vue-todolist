  const { createApp } = Vue

  createApp({
    data() {
      return {
        taskArray : [
            {
                taskText : "fare la spesa",
                done : false
            },
            {
                taskText : "fare benzina",
                done : false
            },
            {
                taskText : "fare le pulizie",
                done : false
            }
        ]
      }
    }
  }).mount('#app')
