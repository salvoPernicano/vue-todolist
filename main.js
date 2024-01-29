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
        ],
        newTaskObj : '',
      }
    },
    methods : {
      deleteTask : function(index){
        this.taskArray.splice(index,1);
      },
      doneTask : function(index){
       this.taskArray[index].done ? this.taskArray[index].done = false : this.taskArray[index].done = true; 
        console.log(this.taskArray[index].done);
      },
      addTask : function(){
        let newElement = {
          taskText : this.newTaskObj,
          done : false
        };
        this.taskArray.push(newElement);
        this.newTaskObj = '';
        console.log(this.taskArray)
      }
    }
  }).mount('#app')
