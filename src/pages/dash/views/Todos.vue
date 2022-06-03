<template>
  <div class="Todos">
    <div class="list">
      <div class="item" v-for="task in todos" :key="task._id" :class="{done:task.done}">
        <input @click="toggleDone(task)" type="checkbox" >
        <div class="name" v-text="task.name"></div>
        <button @click="removeTodo(task)" class="remove">Delete</button>
      </div>
    </div>
    <div class="form">
      <input v-model="newTask" type="text" name="todo" id="todo" placeholder="yet another task">
      <button @click="createTask">Add Todo</button>
    </div>
  </div>
</template>
<script>
import {Api} from "../../../lib/api";

const Todos = Api.Documents('todos')
export default {
  name:'Todos',
  mounted(){
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const {data} = await Todos.find();
      this.todos = data;
    },
    async createTask() {
      await Todos.create({
        name: this.newTask,
        done: false,
      })
      this.fetchData();
      this.newTask = '';
      document.getElementById('todo').focus();
    },
    async removeTodo(task) {
      await Todos.deleteOne({_id: task._id})
      this.fetchData();
    },
    async toggleDone(task) {
      await Todos.updateOne({_id:task._id},{...task,done:!task.done})
      this.fetchData();
    }
  },
  data() {
    return {
      todos: [],
      newTask: '',
    }
  }
}
</script>
<style lang="scss">
.Todos{
  @apply px-4;
 .item{
  @apply text-lg  text-gray-700 flex px-2 items-center gap-2 w-full py-2 rounded
  hover:bg-gray-200 transition my-2;
   .remove{
     @apply ml-auto bg-red-400 text-white px-2 py-1 text-sm rounded;
   }
   &.done{
     @apply text-gray-500 line-through;
   }
 }
  .form{
    @apply flex w-full gap-2;
    input{
      @apply w-full border outline-blue-600 border-gray-200 px-2 py-1;
    }
    button{
      @apply whitespace-nowrap bg-blue-500 text-white rounded px-2 py-1;
    }
  }
}
</style>
